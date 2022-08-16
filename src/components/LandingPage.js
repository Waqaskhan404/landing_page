import React from "react";
import Navbar from "./Navbar";
import interrior from "../images/interior.jpg";
import "./style.css";

function LandingPage() {
  return (
    <>
      <section className="container-fluid bg-color">
        <div className="container ">
          <div className="row font_family h-35">
            <div className="col-2  d-flex my-auto ">
              <div className="pe-3 ">
                <i className="fa-regular fa-envelope color"></i>
              </div>
              <div className="opactity"> contact@furnita.com</div>
            </div>
            <div className="col-2 d-flex  my-auto  mx-1">
              <div className="mx-3">
                <i className="fa-solid fa-phone color"></i>
              </div>
              <div className="opactity"> +92 333 9053362</div>
            </div>
            <div className="col d-flex my-auto mx-1">
              <div className="mx-3">
                <i className="fa-solid fa-location-dot color"></i>
              </div>
              <div className="opactity">University road, Peshawar Pakistan</div>
            </div>
            <div className="col-2 d-flex my-auto  mx-1 justify-content-end">
              <div className="opactity"> Wishlist</div>
            </div>
          </div>
        </div>
      </section>
      <Navbar />
      {/* Slider */}
      <section className="container-fluid mb-5 mt-2 bg-color">
        <div className="container">
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-bs-ride="true"
          >
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={interrior} class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src={interrior} class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src={interrior} class="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <i className="fa-solid fa-angle-left slider-next-pre"></i>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <i className="fa-solid fa-angle-right slider-next-pre"></i>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>

      {/* Slider End */}
      {/* Interor-Start */}
      <section className="container-fluid">
        <div className="container ">
          <div className="row ">
            <div className="col-3 image-one me-4">
              <h3 className="image-one-heading mt-4 ms-3">
                <span className="in"> &nbsp;In</span>tertior
              </h3>
            </div>
            <div className="col-sm-9">
              <div className="row">
                <div className="col-8 col-sm-6 image-two me-4 mb-4">
                  <div className="d-flex align-items-end h-100 ">
                    <h3 className="image-one-heading mb-4">
                      <span className="de"> &nbsp; &nbsp;D</span>ecoration
                    </h3>
                  </div>
                </div>
                <div className="col-4 col-sm-6 image-three mb-4">
                  <div className="d-flex align-items-end h-100 ">
                    <h1 className="image-one-heading">
                      CH
                      <br />
                      Air
                    </h1>
                  </div>
                </div>
                <div className="col-4 col-sm-6 image-three me-4">
                  <div className="d-flex align-items-end justify-content-end h-100 ">
                    <h1 className="image-one-heading">
                      So
                      <br />
                      Fa
                    </h1>
                  </div>
                </div>
                <div className="col-8 col-sm-6 image-two ">
                  <div className="d-flex align-items-end h-100 ">
                    <h3 className="image-one-heading mb-4 ">
                      <span className="fu "> &nbsp; &nbsp;F</span>urniture
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Interor-Start-End */}

      {/* Feature Product */}
      <section className="container mt-5 mb-5">
        <div className="row">
          <div className="col-2">
            <h5 className="this-month">Featured Product</h5>
          </div>
          <div className="col-9">
            <div className="straight-line "></div>
          </div>
          <div className="col-1">
            <button
              type="button"
              className="btn btn-sm mb-3 btn-outline-dark me-2"
              data-mdb-ripple-color="dark"
            >
              <i className="fa-solid fa-angle-left"></i>
            </button>
            <button
              type="button"
              className="btn btn-sm mb-3 btn-outline-dark"
              data-mdb-ripple-color="dark"
            >
              <i className="fa-solid fa-angle-right"></i>
            </button>
          </div>
        </div>
        <div className="row justify-content-between ">
          <div className="our-projects-img-card col-2  our-projects-img-card-background-one ">
            <div className="our-projects-animation">
              <div className="our-projects-title">
                <div className="add-favrite d-flex ">
                  <div className="border-after me-2">
                    <i className="fa-solid fa-eye"></i>
                  </div>
                  <div className="border-after">
                    <i className="fa-solid fa-eye"></i>
                  </div>
                </div>
                <div>
                  <button className="small-button">
                    <i className="fa-solid fa-cart-shopping pointer-cursor me-2"></i>
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
            <div className="price">
              Beautiful Chair made of wood <br />
              <p>
                <del>$ 35.00</del> &nbsp; &nbsp;
                <ins className="color">$ 25.00</ins>
              </p>
            </div>
          </div>
          <div className="our-projects-img-card col-2  our-projects-img-card-background-one ">
            <div className="our-projects-animation">
              <div className="our-projects-title">
                <div className="add-favrite d-flex ">
                  <div className="border-after me-2">
                    <i className="fa-solid fa-eye"></i>
                  </div>
                  <div className="border-after">
                    <i className="fa-solid fa-eye"></i>
                  </div>
                </div>
                <div>
                  <button className="small-button">
                    <i className="fa-solid fa-cart-shopping pointer-cursor me-2"></i>
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
            <div className="price">
              Soft Chairs with Foam Cover
              <br />
              <p>
                <ins>$ 35.00</ins> &nbsp; &nbsp;
              </p>
            </div>
          </div>
          <div className="our-projects-img-card col-2  our-projects-img-card-background-one ">
            <div className="our-projects-animation">
              <div className="our-projects-title">
                <div className="add-favrite d-flex ">
                  <div className="border-after me-2">
                    <i className="fa-solid fa-eye"></i>
                  </div>
                  <div className="border-after">
                    <i className="fa-solid fa-eye"></i>
                  </div>
                </div>
                <div>
                  <button className="small-button">
                    <i className="fa-solid fa-cart-shopping pointer-cursor me-2"></i>
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
            <div className="price">
              Rounded Chairs
              <br />
              <p>
                <ins>$ 35.00</ins> &nbsp; &nbsp;
              </p>
            </div>
          </div>
          <div className="our-projects-img-card col-2  our-projects-img-card-background-one ">
            <div className="our-projects-animation">
              <div className="our-projects-title">
                <div className="add-favrite d-flex ">
                  <div className="border-after me-2">
                    <i className="fa-solid fa-eye"></i>
                  </div>
                  <div className="border-after">
                    <i className="fa-solid fa-eye"></i>
                  </div>
                </div>
                <div>
                  <button className="small-button">
                    <i className="fa-solid fa-cart-shopping pointer-cursor me-2"></i>
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
            <div className="price">
              Beautiful Art Chair
              <br />
              <p>
                <ins>$ 35.00</ins> &nbsp; &nbsp;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Product End */}

      {/* Modren Soffa For Office */}
      <section className="container mb-5-modren-soffa mt-5-modren-soffa">
        <div className="row mt-5 mb-5">
          <div className="col-6 ">
            <div className="office-soffa"></div>
          </div>
          <div className="col-6">
            <div className="mb-4">
              <h3 className="soffa-heading">
                Modern Sofa for Office and Hoeme
              </h3>
            </div>
            <div>
              <div className="modern-soffa-price ">
                <p>
                  <ins className="color modern-soffa-price ">$35.00</ins>
                  <del className="ps-4 delete-color">$ 50</del> &nbsp; &nbsp;
                </p>
              </div>
            </div>
            <div className="mt-5 pb-5">
              <p className="modren-soffa-desc">
                Cum sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Nunc finibus sit amet ligula id gravida.
                Curabitur quis orci non leo varius dapibus in ornare
                tortorparturient montes.
              </p>
            </div>
            <div className="d-flex justify-content-center align-items-center w-50">
              <div className=" modren-soffa-input-main">
                <button className="increment-decrement-btn">+</button>
                <input
                  className="modren-soofa-input"
                  type="number"
                  placeholder="01"
                />
                <button className="increment-decrement-btn">-</button>
              </div>
              <div className="ps-2 pe-2">
                <button className="modren-soffa-btn">ADD TO CART</button>
              </div>
              <div>
                <button>
                  <i className="fa-solid fa-eye modren-soffa-favitre"></i>
                </button>
              </div>
            </div>
            <div className="row pt-3 ps-2">
              <div className="col-3">
                <p>Color :</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Modren Soffa For Office-End */}

      {/* upper latest */}
      <section>
        <div className="container mt-5 mb-5">
          <div className="row">
            <div className="col-3 image-bed me-3">
              <div>
                <h5 className="small-heading pt-5 ps-4">Bedroom Sofa</h5>
              </div>
              <div>
                <p className="small-desc ps-4 ">Furnita Collection</p>
              </div>
            </div>
            <div className="col-6 image-sofa me-3">
              <div>
                <h5 className="small-heading pt-5 ps-4">
                  Study Table and Chair
                </h5>
              </div>
              <div>
                <p className="small-desc ps-4 ">Furnita Collection</p>
              </div>
            </div>
            <div className="col-3 image-chair">
              <div>
                <h5 className="small-heading pt-5 ps-4">Office Chair</h5>
              </div>
              <div>
                <p className="small-desc ps-4 ">Furnita Collection</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* upper latest End */}

      {/* Latest product */}
      <section className="container-fluid mt-5">
        <div className="container ">
          <div className="row mt-5 mb-5 justify-content-center">
            <div className="col-12 d-flex justify-content-center">
              <h3 className="this-month lastes-product">LATEST PRODUCT</h3>
            </div>
            <div className="col-12 d-flex justify-content-center">
              <div className="small-straight-line me-2"></div>
              <div className="circle"></div>
              <div className="small-straight-line ms-2"></div>
            </div>
          </div>
          <div className="row ">
            <div className="col-3 image-one me-4">
              <div className="latest-main  h-100 d-flex justify-content-center align-items-center">
                <div className="latest-outer   ">
                  <div className="latest-inner d-flex justify-content-center align-items-center ">
                    <h3 className="latest">
                      <span className="lat">LATE</span>
                      <br />
                      EST
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-9">
              <div className="row">
                <div className="col-5  latest-image-two me-4 mb-4">
                  <div className="price latest-top">
                    Beautiful Chair made of wood <br />
                    <p>
                      <del>$ 35.00</del> &nbsp; &nbsp;
                      <ins className="color">$ 25.00</ins>
                    </p>
                  </div>
                </div>
                <div className="col-5 latest-image-two mb-4">
                  <div className="price latest-top">
                    Beautiful Chair made of wood <br />
                    <p>
                      <ins>$ 5.00</ins>
                    </p>
                  </div>
                </div>
                <div className="col-5 mt-5  latest-image-two me-4">
                  <div className="price latest-top">
                    Beautiful Chair made of wood <br />
                    <p>
                      <del>$ 35.00</del> &nbsp; &nbsp;
                      <ins className="color">$ 25.00</ins>
                    </p>
                  </div>
                </div>
                <div className="col-5 mt-5 latest-image-two ">
                  <div className="price latest-top">
                    Beautiful Chair made of wood <br />
                    <p>
                      <ins>$ 5.00</ins>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Latest product end  */}
      {/* Hot item this months  */}
      <section className="container mt-5">
        <div className="row">
          <div className="col-2">
            <h5 className="this-month">THIS MONTH HOT</h5>
          </div>
          <div className="col-9">
            <div className="straight-line "></div>
          </div>
          <div className="col-1">
            <button
              type="button"
              className="btn btn-sm mb-3 btn-outline-dark me-2"
              data-mdb-ripple-color="dark"
            >
              <i className="fa-solid fa-angle-left"></i>
            </button>
            <button
              type="button"
              className="btn btn-sm mb-3 btn-outline-dark"
              data-mdb-ripple-color="dark"
            >
              <i className="fa-solid fa-angle-right"></i>
            </button>
          </div>
        </div>
        <div className="row justify-content-between ">
          <div className="our-projects-img-card col-2  our-projects-img-card-background-one ">
            <div className="our-projects-animation">
              <div className="our-projects-title">
                <div className="add-favrite d-flex ">
                  <div className="border-after me-2">
                    <i className="fa-solid fa-eye"></i>
                  </div>
                  <div className="border-after">
                    <i className="fa-solid fa-eye"></i>
                  </div>
                </div>
                <div>
                  <button className="small-button">
                    <i className="fa-solid fa-cart-shopping pointer-cursor me-2"></i>
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
            <div className="price">
              Beautiful Chair made of wood <br />
              <p>
                <del>$ 35.00</del> &nbsp; &nbsp;
                <ins className="color">$ 25.00</ins>
              </p>
            </div>
          </div>
          <div className="our-projects-img-card col-2  our-projects-img-card-background-one ">
            <div className="our-projects-animation">
              <div className="our-projects-title">
                <div className="add-favrite d-flex ">
                  <div className="border-after me-2">
                    <i className="fa-solid fa-eye"></i>
                  </div>
                  <div className="border-after">
                    <i className="fa-solid fa-eye"></i>
                  </div>
                </div>
                <div>
                  <button className="small-button">
                    <i className="fa-solid fa-cart-shopping pointer-cursor me-2"></i>
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
            <div className="price">
              Soft Chairs with Foam Cover
              <br />
              <p>
                <ins>$ 35.00</ins> &nbsp; &nbsp;
              </p>
            </div>
          </div>
          <div className="our-projects-img-card col-2  our-projects-img-card-background-one ">
            <div className="our-projects-animation">
              <div className="our-projects-title">
                <div className="add-favrite d-flex ">
                  <div className="border-after me-2">
                    <i className="fa-solid fa-eye"></i>
                  </div>
                  <div className="border-after">
                    <i className="fa-solid fa-eye"></i>
                  </div>
                </div>
                <div>
                  <button className="small-button">
                    <i className="fa-solid fa-cart-shopping pointer-cursor me-2"></i>
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
            <div className="price">
              Rounded Chairs
              <br />
              <p>
                <ins>$ 35.00</ins> &nbsp; &nbsp;
              </p>
            </div>
          </div>
          <div className="our-projects-img-card col-2  our-projects-img-card-background-one ">
            <div className="our-projects-animation">
              <div className="our-projects-title">
                <div className="add-favrite d-flex ">
                  <div className="border-after me-2">
                    <i className="fa-solid fa-eye"></i>
                  </div>
                  <div className="border-after">
                    <i className="fa-solid fa-eye"></i>
                  </div>
                </div>
                <div>
                  <button className="small-button">
                    <i className="fa-solid fa-cart-shopping pointer-cursor me-2"></i>
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
            <div className="price">
              Beautiful Art Chair
              <br />
              <p>
                <ins>$ 35.00</ins> &nbsp; &nbsp;
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Hot item this months end  */}

      {/* Furnita Form */}
      <section>
        <div className="container mt-5   ">
          <div className="row align-items-center ">
            <div className="col-4 image-one d-flex align-items-center justify-content-center">
              <h3 className="image-one-heading mt-4 ms-3">
                <span className="we-are">We are</span>
                <br /> FURNITA
              </h3>
            </div>
            <div className="col ">
              <div className="row  bg-color">
                <div className="col-12 col-sm-6 w-100 me-4 mb-4">
                  <div className="mt-5 ps-5">
                    <div>
                      <h2 className="NewsLetter">NewsLetter</h2>
                    </div>
                    <div>
                      <p className="subscribe-desc">
                        Subscribe for the Latest stories and Promotions
                      </p>
                    </div>
                    <div>
                      <form>
                        <input
                          type="email"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Enter your email"
                        />
                        <div className="mt-4">
                          <button className="subscribe-btn">Subscribe</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Furnita Form ENd */}
      {/* Fotter Start */}
      <footer className="container-fluid bg-color mt-5 pb-5 ">
        <section className="container">
          <div className="d-flex justify-content-center pt-5">
            <h4 className="logo-text me-0">
              FUR<span className="color ">NITA</span>
            </h4>
          </div>
          <div className=" d-flex justify-content-center ">
            <div className="me-4 social-icons">
              <i className="fa-brands fa-linkedin"></i>
            </div>
            <div className="me-4 social-icons">
              <i className="fa-brands fa-facebook"></i>
            </div>
            <div className="me-4 social-icons">
              <i className="fa-brands fa-google"></i>
            </div>
            <div className="me-4 social-icons">
              <i className="fa-brands fa-pinterest"></i>
            </div>
            <div className="social-icons">
              <i className="fa-brands fa-twitter"></i>
            </div>
          </div>
          <div className="d-flex justify-content-center pt-5">
            <p className="desc">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore
            </p>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-4 d-flex  justify-content-center">
              <div className="mx-3">
                <i className="fa-solid fa-location-dot "></i>
              </div>
              <div className="opactity">University road, Peshawar Pakistan</div>
            </div>
            <div className="col-4 d-flex  justify-content-center">
              <div className="mx-3">
                <i className="fa-solid fa-phone "></i>
              </div>
              <div className="opactity"> +92 333 9053362</div>
            </div>
            <div className="col-4 d-flex  justify-content-center">
              <div className="pe-3  ">
                <i className="fa-regular fa-envelope "></i>
              </div>
              <div className="opactity"> contact@furnita.com</div>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}

export default LandingPage;
