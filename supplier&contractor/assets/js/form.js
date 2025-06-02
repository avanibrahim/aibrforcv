const form = document.getElementById('orderForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const product = document.getElementById('product').value;
    const quantity = document.getElementById('quantity').value;

    const whatsappNumber = '6282291325909'; // Nomor WhatsApp tujuan
    const message = `Order Details:\nName: ${name}\nPhone: ${phone}\nProduct: ${product}\nQuantity: ${quantity}`;
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    // Debugging: Log data ke konsol
    console.log({ name, phone, product, quantity, whatsappLink });

    // Buka WhatsApp
    window.open(whatsappLink, '_blank');
});