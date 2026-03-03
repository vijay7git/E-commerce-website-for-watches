        // Unique watch images with different Unsplash IDs and appropriate names
        const watches = [
            { 
                id: 1, 
                name: "Royal Chronograph", 
                price: 35999, 
                img: "https://images.unsplash.com/photo-1547996160-81f58a5e0e86?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
            },
            { 
                id: 2, 
                name: "Golden Heritage", 
                price: 42999, 
                img: "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
            },
            { 
                id: 3, 
                name: "Ocean Diver Pro", 
                price: 28999, 
                img: "https://images.unsplash.com/photo-1553062407-98feb1a6f834?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
            },
            { 
                id: 4, 
                name: "Silver Classic", 
                price: 23999, 
                img: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
            },
            { 
                id: 5, 
                name: "Leather Vintage", 
                price: 18999, 
                img: "https://images.unsplash.com/photo-1539874754764-5a96559165b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
            },
            { 
                id: 6, 
                name: "Rose Elegance", 
                price: 32999, 
                img: "https://images.unsplash.com/photo-1581235720706-9856d6d1e4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
            },
            { 
                id: 7, 
                name: "Black Steel", 
                price: 27999, 
                img: "https://images.unsplash.com/photo-1557531365-e8b22d93dbd0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
            }
        ];

        let cart = [];
        const watchGrid = document.getElementById('watchGrid');
        const cartCount = document.getElementById('cartCount');

        function renderWatches() {
            watchGrid.innerHTML = watches.map(watch => `
                <div class="watch-card">
                    <div class="watch-img">
                        <img src="${watch.img}" alt="${watch.name}" loading="lazy">
                    </div>
                    <div class="watch-info">
                        <div class="watch-name">${watch.name}</div>
                        <div class="watch-price">₹${watch.price.toLocaleString()}</div>
                        <button class="add-cart" onclick="addToCart(${watch.id})">Add to Cart</button>
                    </div>
                </div>
            `).join('');
        }

        function addToCart(id) {
            const watch = watches.find(w => w.id === id);
            cart.push(watch);
            updateCart();
            
            // Visual feedback
            const button = event.target;
            button.textContent = "Added!";
            button.style.background = "#4CAF50";
            
            setTimeout(() => {
                button.textContent = "Add to Cart";
                button.style.background = "";
            }, 1000);
        }

        function updateCart() {
            cartCount.textContent = cart.length;
        }

        function toggleCart() {
            if(cart.length === 0) {
                alert("Your cart is empty!");
            } else {
                let total = cart.reduce((sum, item) => sum + item.price, 0);
                let items = cart.map(item => `• ${item.name} - ₹${item.price.toLocaleString()}`).join('\n');
                alert(`Your Cart:\n\n${items}\n\nTotal: ₹${total.toLocaleString()}`);
            }
        }

        // Initialize
        renderWatches();
        
        // Add image error handling with fallback images
        document.addEventListener('DOMContentLoaded', function() {
            const fallbackImages = [
                'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                'https://images.unsplash.com/photo-1547996160-81f58a5e0e86?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                'https://images.unsplash.com/photo-1553062407-98feb1a6f834?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
            ];
            
            const images = document.querySelectorAll('img');
            images.forEach((img, index) => {
                img.onerror = function() {
                    // Use different fallback image based on position
                    const fallbackIndex = index % fallbackImages.length;
                    this.src = fallbackImages[fallbackIndex];
                    this.alt = 'Watch image';
                };
            });
        });
    
