function App() {
  return (
      <div className="app">
        <section id="content">
          <header>
            <div>
              <h1>Shop Mart</h1>
              <div>
                <button className="icon-btn">
                  <span>&#129293;</span>
                  <span className="badge">3</span>
                </button>
                <button className="icon-btn">
                  <span>&#128722;</span>
                  <span className="badge">3</span>
                </button>
              </div>
            </div>
            <div>
              <nav>
                <button>home</button>
                <button>catalog</button>
                <button>all products</button>
                <button>wishlist</button>
              </nav>

              <form>
                <input type="search" placeholder="search" />
                <button type="button">Go</button>
              </form>
            </div>
          </header>

          <main>
            <div className="product">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Pair_of_shoes%2C_silver_leather_wedges%2C_Prada%2C_Italy%2C_2005.jpg" alt="" />
              <p className="pr-name">Shoes</p>
              <p className="pr-price">$40</p>
            </div>
            
            <div className="product">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Pair_of_shoes%2C_silver_leather_wedges%2C_Prada%2C_Italy%2C_2005.jpg" alt="" />
              <p className="pr-name">Shoes</p>
              <p className="pr-price">$40</p>
            </div>
            
            <div className="product">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Pair_of_shoes%2C_silver_leather_wedges%2C_Prada%2C_Italy%2C_2005.jpg" alt="" />
              <p className="pr-name">Shoes</p>
              <p className="pr-price">$40</p>
            </div>
            
            <div className="product">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Pair_of_shoes%2C_silver_leather_wedges%2C_Prada%2C_Italy%2C_2005.jpg" alt="" />
              <p className="pr-name">Shoes</p>
              <p className="pr-price">$40</p>
            </div>
            
            <div className="product">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Pair_of_shoes%2C_silver_leather_wedges%2C_Prada%2C_Italy%2C_2005.jpg" alt="" />
              <p className="pr-name">Shoes</p>
              <p className="pr-price">$40</p>
            </div>
            
            <div className="product">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Pair_of_shoes%2C_silver_leather_wedges%2C_Prada%2C_Italy%2C_2005.jpg" alt="" />
              <p className="pr-name">Shoes</p>
              <p className="pr-price">$40</p>
            </div>
            
          </main>
        </section>
        <footer>
          <div>
            <h3>Our store</h3>
            <ul>
              <li><a href="">About us</a></li>
              <li><a href="">Contact us</a></li>
              <li><a href="">Sell with us</a></li>
            </ul>
          </div>

          <div>
            <h3>Our policies</h3>
            <ul>
              <li><a href="">Return policies</a></li>
              <li><a href="">Shipping policies</a></li>
              <li><a href="">Terms of service</a></li>
            </ul>
          </div>

          <div>
            <h3>Our product</h3>
            <ul>
              <li><a href="">Home page</a></li>
              <li><a href="">Search</a></li>
              <li><a href="">Catalogs</a></li>
            </ul>
          </div>
        </footer>
      </div>
  );
}

export default App;
