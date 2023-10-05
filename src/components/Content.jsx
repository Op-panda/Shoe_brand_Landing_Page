export default function Content() {
  return (
    <main className="content">
      <div className="text-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>

        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>

        <div className="content-btn">
          <button>shop now</button>
          <button className="secondary-btn">category</button>
        </div>

        <div className="shop">
          <p>Also Available On</p>
          <div className="shop-img">
            <img src="./images/flipkart.png" alt="flipkart" />
            <img src="./images/amazon.png" alt="amazon" />
          </div>
        </div>
      </div>

      <div classname="image-content">
        <img src="./images/shoe_image.png" alt="shoe" />
      </div>
    </main>
  );
}
