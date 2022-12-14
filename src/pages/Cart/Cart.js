import React, { useEffect, useState } from "react";
import "./Cart.css";
import styled from "styled-components";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { mobile } from "./responsive";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Cart() {
  // const basket = useSelector((state) => state.cart.cart);
  // const user = useSelector((state) => state.user.user);
  // console.log(basket);
  const [trigger, setTrigger] = useState(true);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [duration, setDuration] = useState();

  const history = useHistory();

  async function fetchData() {
    try {
      const res = await axios.get("/user/getcart");
      console.log(res);
      setCart(res.data.data.user.cart.items);
      console.log("total");
      let t = new Number(0);
      for (let i = 0; i < res.data.data.user.cart.items.length; i++){
        t +=
          (res.data.data.user.cart.items[i].quantity *
          res.data.data.user.cart.items[i].productId.rentalprice * res.data.data.user.cart.items[i].duration + res.data.data.user.cart.items[i].productId.deposit);
        }
      console.log(t);
      setTotal(t);
    } catch (error) {
      if (error.message === "Request failed with status code 401") {
        localStorage.clear();
      }
      console.error(error);
    }
  }

  async function addCart(id) {
    try {
      const res = await axios.post("/user/addtocart", {
        productId: id,
      });
      setTrigger(!trigger);
    } catch (error) {
      if (error.message === "Request failed with status code 401") {
        localStorage.clear();
      }
      console.error(error);
    }
  }

  async function removeCart(id) {
    try {
      const res = await axios.post("/user/removecart", {
        productId: id,
      });
      setTrigger(!trigger);
    } catch (error) {
      if (error.message === "Request failed with status code 401") {
        localStorage.clear();
      }
      console.error(error);
    }
  }

  async function changeDuration(id) {
    try {
      console.log(duration);
      const res = await axios.post("/duration", {
        productId: id,
        isdurationincreased: duration,
      });
      setTrigger(!trigger);
    } catch (error) {
      if (error.message === "Request failed with status code 401") {
        localStorage.clear();
      }
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [trigger]);

  const Container = styled.div``;
  const Wrapper = styled.div`
    padding: 20px;
    ${mobile({ padding: "10px" })}
  `;
  const Title = styled.h1`
    font-weight: 300;
    text-align: center;
  `;
  const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
  `;
  const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${(props) => props.type === "filled" && "none"};
    background-color: ${(props) =>
      props.type === "filled" ? "black" : "transparent"};
    color: ${(props) => props.type === "filled" && "white"};
  `;
  const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}
  `;
  const TopTexts = styled.div`
    ${mobile({ display: "none" })}
  `;
  const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
  `;
  const Info = styled.div`
    flex: 3;
  `;
  const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 55vh;
  `;
  const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}
  `;
  const ProductDetail = styled.div`
    flex: 2;
    display: flex;
  `;
  const Image = styled.img`
    width: 200px;
  `;
  const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `;
  const ProductName = styled.span``;
  const ProductId = styled.span``;
  const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
  `;
  const ProductSize = styled.span``;
  const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;
  const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  `;
  const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({ margin: "5px 15px" })}
  `;
  const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({ marginBottom: "20px" })}
  `;
  const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
  `;
  const SummaryTitle = styled.h1`
    font-weight: 200;
  `;
  const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
  `;
  const SummaryItemText = styled.span`
    font-weight: ${(props) => props.type === "total" && "500"};
    font-size: ${(props) => props.type === "total" && "24px"};
  `;
  const SummaryItemPrice = styled.span`
    font-weight: ${(props) => props.type === "total" && "500"};
    font-size: ${(props) => props.type === "total" && "24px"};
  `;
  const SummaryButton = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
  `;

  return (
    <Container>
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton onClick={() => history.push("/product")}>
            CONTINUE SHOPPING
          </TopButton>
          <TopTexts>
            <TopText>{`Shopping Bag(${cart.length})`}</TopText>
            <TopText>Your Wishlist(0)</TopText>
          </TopTexts>
          <TopButton type="filled" onClick={() => history.push("/policies")}>
            CHECKOUT NOW
          </TopButton>
        </Top>
        <Bottom>
          <Info>
            {cart.length !== 0 ? (
              cart.map((val, ind) => {
                console.log(val);
                return (
                  <>
                    <Product key={ind}>
                      <ProductDetail>
                        <Image src={val.productId.image[0].url} />
                        <Details>
                          <ProductName>
                            <b>Product:</b> {val.productId.name}
                          </ProductName>
                          {/* <ProductId>
                          <b>ID:</b> {val.}
                        </ProductId>
                        <ProductColor color="black" /> 
                        <ProductSize>
                          <b>Size:</b> 37.5
                        </ProductSize> */}
                        </Details>
                      </ProductDetail>
                      <PriceDetail>
                        <ProductAmountContainer>
                          <p style={{marginTop: '1.3rem',marginRight: "1rem"}}>Quantity: </p>
                          <AddIcon
                            style={{ cursor: "pointer" }}
                            onClick={() => {
                              addCart(val.productId._id);
                            }}
                          />
                          <ProductAmount>{val.quantity}</ProductAmount>
                          <RemoveIcon
                            style={{ cursor: "pointer" }}
                            onClick={() => {
                              removeCart(val.productId._id);
                            }}
                          />
                        </ProductAmountContainer>
                        <ProductAmountContainer>
                          <p style={{marginTop: '1.3rem',marginRight: "1rem"}}>Duration: </p>
                          <AddIcon
                            style={{ cursor: "pointer" }}
                            onClick={() => {
                              setDuration(true)
                              changeDuration(val.productId._id);
                            }}
                          />
                          <ProductAmount>{val.duration}</ProductAmount>
                          <RemoveIcon
                            style={{ cursor: "pointer" }}
                            onClick={() => {
                              setDuration(false)
                              changeDuration(val.productId._id);
                            }}
                          />
                        </ProductAmountContainer>
                        <ProductPrice>
                          <span style={{marginRight: "1rem"}}>Rental Price: </span>
                          ₹ {val.productId.rentalprice}
                        </ProductPrice>
                        <ProductPrice>
                          <span style={{marginRight: "1rem"}}>Deposit: </span>
                          ₹ {val.productId.deposit}
                        </ProductPrice>
                      </PriceDetail>
                    </Product>
                    <Hr key={ind - 1} />
                  </>
                );
              })
            ) : (
              <h1>Cart is Empty</h1>
            )}
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>₹ {total ? total : 0}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>₹ 500.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>₹ -500.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText type="total">Total</SummaryItemText>
              <SummaryItemPrice type="total">
                ₹ {total ? total : 0}
              </SummaryItemPrice>
            </SummaryItem>
            <SummaryButton onClick={() => history.push("/policies")}>
              CHECKOUT NOW
            </SummaryButton>
          </Summary>
        </Bottom>
      </Wrapper>
    </Container>
  );
}

export default Cart;