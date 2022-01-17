const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <div class="nav">
            <a href="#" class="logo"><img src="Images/dark-logo.png" class="brand-logo" alt=""></a>
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="search product">
                    <button class="search-btn">search</button>
                </div>
                <a href="#"><img src="Images/user.png" alt=""></a>
                <a href="#"><img src="Images/cart.png" alt=""></a>
            </div>
        </div>
        <ul class="links-container">
            <li class="link-item"><a href="#" class="link">home</a></li>
            <li class="link-item"><a href="#" class="link">women</a></li>
            <li class="link-item"><a href="#" class="link">men</a></li>
            <li class="link-item"><a href="#" class="link">kids</a></li>
            <li class="link-item"><a href="#" class="link">accessories</a></li>
        </ul>
    `;
}

createNav();