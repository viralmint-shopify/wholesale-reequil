    const thumbs = document.querySelectorAll('.thumb');
    const mainImage = document.getElementById('main-image');
    thumbs.forEach(button => button.addEventListener('click', () => {
      thumbs.forEach(item => { item.classList.remove('active'); item.setAttribute('aria-pressed','false'); });
      button.classList.add('active'); button.setAttribute('aria-pressed','true');
      mainImage.src = button.dataset.image;
      mainImage.alt = button.getAttribute('aria-label').replace('View ', '');
    }));
    let quantity = 1;
    const qty = document.getElementById('qty');
    const minus = document.getElementById('minus');
    function updateQty() { qty.textContent = quantity; minus.disabled = quantity === 1; }
    minus.addEventListener('click', () => { quantity = Math.max(1, quantity - 1); updateQty(); });
    document.getElementById('plus').addEventListener('click', () => { quantity++; updateQty(); });
    updateQty();
    document.querySelectorAll('.size').forEach(button => button.addEventListener('click', () => {
      document.querySelectorAll('.size').forEach(item => { item.classList.remove('active'); item.setAttribute('aria-pressed','false'); });
      button.classList.add('active'); button.setAttribute('aria-pressed','true');
    }));
    document.querySelectorAll('.pack').forEach(button => button.addEventListener('click', () => {
      document.querySelectorAll('.pack').forEach(item => { item.classList.remove('active'); item.setAttribute('aria-pressed','false'); });
      button.classList.add('active'); button.setAttribute('aria-pressed','true');
    }));
    document.getElementById('cart').addEventListener('click', () => {
      const size = document.querySelector('.size.active').textContent;
      const pack = document.querySelector('.pack.active')?.dataset.pack || 'standard pack';
      document.getElementById('cart-message').textContent = `${quantity} × ${size} ${pack} selected. Connect your store cart to complete checkout.`;
    });
    document.querySelectorAll('.copy').forEach(button => button.addEventListener('click', async () => {
      try { await navigator.clipboard.writeText(button.dataset.code); button.childNodes[0].textContent = 'Copied! '; setTimeout(() => button.childNodes[0].textContent = button.dataset.code + ' ', 1800); }
      catch { button.childNodes[0].textContent = button.dataset.code + ' '; }
    }));
    const pin = document.getElementById('pincode');
    pin.addEventListener('input', () => { pin.value = pin.value.replace(/\D/g,''); document.getElementById('pin-button').classList.toggle('ready', pin.value.length === 6); });
    document.getElementById('pin-form').addEventListener('submit', event => {
      event.preventDefault(); document.getElementById('delivery-message').textContent = /^\d{6}$/.test(pin.value) ? 'Delivery time requires a live store connection.' : 'Enter a valid 6-digit pincode.';
    });
    const faceWash = 'assets/2685_11077_imgBestPairedWithFruitAhaFw3.png';
    function card(name, badge = false) {
      return `<article class="product-card">${badge ? '<span class="card-badge">Bestseller</span>' : ''}<img class="card-image" src="${faceWash}" alt="Fruit AHA face wash bottle"><div class="card-rating"><span><b>★★★★★</b> 4.5</span><span>1261 Reviews</span></div><h3>${name}</h3><span class="card-skin">For Oily Skin, Dry Skin &amp; combination skin</span><div class="card-discount">10% OFF</div><div class="card-bottom"><div><strong>₹399</strong><s>₹695</s></div><button type="button" class="card-add">Add to cart</button></div></article>`;
    }
    document.getElementById('paired-cards').innerHTML = card('Fruit AHA Face Wash', true) + card('Ceramide &amp; Hyaluronic Acid Moisturiser');
    document.getElementById('protection-cards').innerHTML = card('Oil Free Aquagel Sunscreen') + card('Oxybenzone &amp; OMC Free Sunscreen', true) + card('Sheer Zinc Tinted Sunscreen');
    document.getElementById('routine-cards').innerHTML = card('Oil Free Mattifying Gel Moisturiser', true) + card('Oil Free Mattifying Gel Moisturiser') + card('Oil Free Mattifying Gel Moisturiser', true);
    document.querySelectorAll('.card-add').forEach(button => button.addEventListener('click', () => { button.textContent = 'Selected'; }));
    document.querySelectorAll('.routine-tabs button').forEach(button => button.addEventListener('click', () => { document.querySelectorAll('.routine-tabs button').forEach(item => item.setAttribute('aria-selected', 'false')); button.setAttribute('aria-selected', 'true'); }));
    document.querySelectorAll('.carousel-arrows').forEach(group => { const track = group.nextElementSibling; group.querySelector('.next')?.addEventListener('click', () => track.scrollBy({left:320,behavior:'smooth'})); group.querySelector('.prev')?.addEventListener('click', () => track.scrollBy({left:-320,behavior:'smooth'})); });
    document.querySelectorAll('.newsletter,.newsletter-mobile').forEach(form => form.addEventListener('submit', event => { event.preventDefault(); }));
