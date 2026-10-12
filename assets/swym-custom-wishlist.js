/* Product Tile Markup - You can play around with this to change the
information that appears on the Wishlisted Product tiles  */
var productCardMarkup = `<div class="swym-wishlist-grid">
   {{#products}} 
   <a href="{{du}}"aria-label="{{dt}}" class="swym-wishlist-item swym-is-anchor">
   <div class="swymMainGridOuter">
     <div class="swymMainImage">
     <button id="swym-remove-productBtn" aria-label="Delete" data-variant-id="{{epi}}" data-product-id="{{empi}}" class="swym-delete-btn swym-nav swym-nav-1 swym-is-button">
       <span class="swym-icon">
         <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M6.87737 11.685C6.73487 11.685 6.59237 11.6325 6.47987 11.52C6.26237 11.3025 6.26237 10.9425 6.47987 10.725L10.7249 6.48002C10.9424 6.26252 11.3024 6.26252 11.5199 6.48002C11.7374 6.69752 11.7374 7.05752 11.5199 7.27502L7.27487 11.52C7.16987 11.6325 7.01987 11.685 6.87737 11.685Z" fill="#292D32"/>
        <path d="M11.1224 11.685C10.9799 11.685 10.8374 11.6325 10.7249 11.52L6.47987 7.27502C6.26237 7.05752 6.26237 6.69752 6.47987 6.48002C6.69737 6.26252 7.05737 6.26252 7.27487 6.48002L11.5199 10.725C11.7374 10.9425 11.7374 11.3025 11.5199 11.52C11.4074 11.6325 11.2649 11.685 11.1224 11.685Z" fill="#292D32"/>
        </svg>
       </span>
     </button>
     <div class="swym-wishlist-image-wrapper">
       <img alt="" class="swym-wishlist-image" src="{{iu}}">
     </div>
     </div>
     <div class="swymvariantContent">
     <button class="swym-is-button">
       <div class="swym-title swym-title-1">
         {{dt}}
       </div>
     </button>
     <div class="swym-variant-title swym-text swym-title-2 swym-variant-title-spacer">
       {{variantinfo}}
     </div>
      <div class="swym_review_stars">
      <span class="stamped-product-reviews-badge stamped-main-badge" data-id="{{empi}}" data-product-sku="{{ product.handle }}" style="display: inline-block;"></span>
      </div>
      <div class="swym-productContent">
     <div class="swym-product-price swym-text swym-text-1">
       <div class="swym-product-final-price swym-value">
         {{cu}}{{pr}} <span class="percentage_value" style="display:none;"></span>
       </div>
     </div>
     <button id="swym-custom-add-toCartBtn" data-state-cart="{{#isInCart}} swym-added{{/isInCart}}" data-product-url="{{du}}" data-variant-id="{{epi}}" data-product-id="{{empi}}" class="swym-add-to-cart-btn swym-button swym-button-1 swym-is-button swym-is-button">
       {{#isInCart}}Shop now{{/isInCart}}{{^isInCart}}Shop Now{{/isInCart}}
     </button>
     </div>
     </div>
     </div>
   </a>
   {{/products}}
</div>`;

function getVariantInfo(variants) {
	try {
		let variantKeys = ((variants && variants != "[]") ? Object.keys(JSON.parse(variants)[0]) : []),
			variantinfo;
		if (variantKeys.length > 0) {
			variantinfo = variantKeys[0];
			if (variantinfo == "Default Title") {
				variantinfo = "";
			}
		} else {
			variantinfo = "";
		}
		return variantinfo;
	} catch (err) {
		return variants;
	}
}

function onAddToCartClick(e) {
	e.preventDefault();
	var productId = e.currentTarget.getAttribute("data-product-id");
	var variantId = e.currentTarget.getAttribute("data-variant-id");
	var du = e.target.getAttribute("data-product-url");
	e.target.innerHTML = "Adding..";
    jQuery.getJSON('/cart.js', function(cart222) {
    if(cart222.item_count == 0){
      	window._swat.replayAddToCart({
		empi: productId,
		du: du
	}, variantId, function(c) {
		e.target.innerHTML = "Shop now";
		e.target.setAttribute("data-state-cart", "swym-added");
		console.log("Successfully added product to cart.", c);
location.reload();
	}, function(e) {
		console.log(e);
	});
    }else{
      	window._swat.replayAddToCart({
		empi: productId,
		du: du
	}, variantId, function(c) {
		e.target.innerHTML = "Shop Now";
		e.target.setAttribute("data-state-cart", "swym-added");
		console.log("Successfully added product to cart.", c);

        
                              fetch(window.Shopify.routes.root + "?section_id=cart-icon-bubble").then(request => request.text()).then(c => {
                                  const bubbleHTML = new DOMParser().parseFromString(c, 'text/html').querySelector('.shopify-section').innerHTML;
                                  const bubble = document.querySelector('#cart-icon-bubble');
                                  bubble.innerHTML = bubbleHTML;
                              })
                              fetch(window.Shopify.routes.root + "?section_id=cart-drawer").then(res => res.text()).then(data => {
                                  const newHTML = new DOMParser().parseFromString(data, 'text/html').querySelector('cart-drawer').innerHTML;
                                  const drawer = document.querySelector('cart-drawer');
                                  drawer.innerHTML = newHTML;
                              });
        $(".RQCartDRawerExecutionmWp").addClass('active');

      
	}, function(e) {
		console.log(e);
	});
    }
  });

}

function onRemoveBtnClick(e) {
	e.preventDefault();
	var epi = +e.currentTarget.getAttribute("data-variant-id");
	var empi = +e.currentTarget.getAttribute("data-product-id");
	window._swat.fetch(function(products) {
		products.forEach(function(product) {
			if (epi && empi && product.epi == epi && product.empi == empi){
				window._swat.removeFromWishList(product, function() {
					if (!window.SwymCallbacks) {
						window.SwymCallbacks = [];
					}
					window.SwymCallbacks.push(swymRenderWishlist);
				});
			}
		});
	})
}

function swymRenderWishlist(swat) {
	// Get wishlist items
	swat.fetch(function(products) {
		console.log(products)
		var wishlistContentsContainer = document.getElementById("wishlist-items-container");
		var formattedWishlistedProducts = products.map(function(p) {
			p = SwymUtils.formatProductPrice(p); // formats product price and adds currency to product Object
			p.isInCart = _swat.platform.isInDeviceCart(p.epi) || (p.et == _swat.EventTypes.addToCart);
			p.variantinfo = (p.vi ? getVariantInfo(p.vi) : "");
			return p;
		});
		var productCardsMarkup = SwymUtils.renderTemplateString(productCardMarkup, {
			products: formattedWishlistedProducts
		});
		if(wishlistContentsContainer){
			wishlistContentsContainer.innerHTML = productCardsMarkup;
			attachClickListeners();
		} else{
          
		  console.log("Container not found, Wishlist Page element not found");
		}
      // alert(products.length);
      if(products.length < 1){
        $(".wishlist_blank_message").show();
      }else{
        $(".swym-wishlist-grid a.swym-wishlist-item.swym-is-anchor").each(function() {
var url= $(this).attr("href");
var this_item= $(this);
var var_title= $(this).find(".swym-variant-title").text();
var var_title_final= $.trim(var_title);
  jQuery.ajax({
    type: 'GET',
    url: url,
    dataType: 'json',
    success: function(json_data){  
      console.log(json_data);
     $(this_item).find(".stamped-product-reviews-badge").attr("data-product-sku",json_data.product.handle);
      StampedFn.reloadUGC();  

        for (let i = 0; i < json_data.product.variants.length; i++) {
           if(var_title_final == json_data.product.variants[i].title ){
               var compare_price_here = json_data.product.variants[i].compare_at_price
               var sale_price = json_data.product.variants[i].price ;
               var minus_val = compare_price_here - sale_price;
               var multiple_val = minus_val*100;
               var divided = multiple_val / compare_price_here;
               var final_val = divided.toPrecision(2)
               console.log("compare"+compare_price_here+"original"+sale_price);
             if(final_val > 0){
               $(this_item).find("span.percentage_value").html(final_val+"% off");
               $(this_item).find("span.percentage_value").show();
               
           }
           }
 
}

      
    },
  });
});

        $(".wishlist_blank_message").hide();
      }
	});
  swat.fetch(async (wishlist) => {
let wishlistedProducts = await fetchProductData(wishlist);
$(".swym-wishlist-grid a.swym-wishlist-item.swym-is-anchor").each(function() {
     var this_item= $(this);
     var var_id = $(this).find(".swym-productContent button").attr("data-variant-id");
for (let i = 0; i < wishlistedProducts.length; i++) {
  if(var_id == wishlistedProducts[i].epi){
   if(wishlistedProducts[i].productData.available == false){
     console.log("yes");
     $(this).find(".swym-productContent button").text("Sold Out");
     $(this).find(".swym-productContent button").attr("disabled",true);
   }else{
     $(this).find(".swym-productContent button").attr("Shop Now");
      $(this).find(".swym-productContent button").removeAttr("disabled");
   }
  }
}
   });
   

});
async function fetchProductData(wishlist) {
   let fetchedProducts = await Promise.all(wishlist.map(async (listItem) => {
        let response = await fetch(listItem.du.split('?')[0] + '.js');
        let productData = await response.json();
        listItem.productData = productData;
        return listItem;
   }));
   return fetchedProducts; 
}
}

function attachClickListeners() {
	var addToCartButtons = document.querySelectorAll("#swym-custom-add-toCartBtn");
	var removeBtns = document.querySelectorAll("#swym-remove-productBtn");
	//   Add to cart Btns
	for (var i = 0; i < addToCartButtons.length; i++) {
		addToCartButtons[i].addEventListener('click', onAddToCartClick, false);
	}
	//   Remove Buttons
	for (var k = 0; k < removeBtns.length; k++) {
		removeBtns[k].addEventListener('click', onRemoveBtnClick, false);
	}
	console.log("Events attached!");
}

if (!window.SwymCallbacks) {
	window.SwymCallbacks = [];
}
window.SwymCallbacks.push(swymRenderWishlist); /* Init Here */