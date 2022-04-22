import React, { useEffect, useState } from "react";
import "./Cart.css";
import { useSelector } from "react-redux";
import styled from "styled-components";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { mobile } from "./responsive";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Cart() {
  const basket = useSelector((state) => state.cart.cart);
  const user = useSelector((state) => state.user.user);
  console.log(basket);
  const [trigger, setTrigger] = useState(true);
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const history = useHistory();

  async function fetchData() {
    try {
      const res = await axios.get("/user/getcart");
      console.log(res);
      setCart(res.data.data.cart.items);
    } catch (error) {
      const refreshToken = localStorage.getItem("refreshToken");
      if (error.message === "Request failed with status code 401") {
        axios.defaults.headers.common["Authorization"] = refreshToken;
        const result = await axios.post("/revoketoken");
        localStorage.setItem("accessToken", result.data.data.accessToken);
        localStorage.setItem("refreshToken", result.data.data.refreshToken);
      }
      console.error(error);
    }
  }

  async function addCart(id) {
    try {
      const res = await axios.post("/user/addtocart", {
        productId: id,
      });
      console.log(res);
    } catch (error) {
      const refreshToken = localStorage.getItem("refreshToken");
      if (error.message === "Request failed with status code 401") {
        axios.defaults.headers.common["Authorization"] = refreshToken;
        const result = await axios.post("/revoketoken");
        localStorage.setItem("accessToken", result.data.data.accessToken);
        localStorage.setItem("refreshToken", result.data.data.refreshToken);
      }
      console.error(error);
    }
  }

  async function removeCart(id) {
    try {
      const res = await axios.post("/user/removecart", {
        productId: id,
      });
      console.log(res);
    } catch (error) {
      const refreshToken = localStorage.getItem("refreshToken");
      if (error.message === "Request failed with status code 401") {
        axios.defaults.headers.common["Authorization"] = refreshToken;
        const result = await axios.post("/revoketoken");
        localStorage.setItem("accessToken", result.data.data.accessToken);
        localStorage.setItem("refreshToken", result.data.data.refreshToken);
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
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist(0)</TopText>
          </TopTexts>
          <TopButton type="filled" onClick={() => history.push("/checkout")}>
            CHECKOUT NOW
          </TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" />
                <Details>
                  <ProductName>
                    <b>Product:</b> JESSIE THUNDER SHOES
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 9887463254466
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>Size:</b> 37.5
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <AddIcon
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setQuantity(quantity + 1);
                      addCart("6262220eb7810d8ee60f31d2");
                    }}
                  />
                  <ProductAmount>{quantity}</ProductAmount>
                  <RemoveIcon
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      quantity > 1 && setQuantity(quantity - 1);
                      removeCart("6262220eb7810d8ee60f31d2");
                    }}
                  />
                </ProductAmountContainer>
                <ProductPrice>$ 30</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" />
                <Details>
                  <ProductName>
                    <b>Product:</b> JESSIE THUNDER SHOES
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 9887463254466
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>Size:</b> 37.5
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <AddIcon />
                  <ProductAmount>2</ProductAmount>
                  <RemoveIcon />
                </ProductAmountContainer>
                <ProductPrice>$ 30</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText type="total">Total</SummaryItemText>
              <SummaryItemPrice type="total">$ 80</SummaryItemPrice>
            </SummaryItem>
            <SummaryButton onClick={() => history.push("/checkout")}>
              CHECKOUT NOW
            </SummaryButton>
          </Summary>
        </Bottom>
      </Wrapper>
    </Container>
  );
}

export default Cart;
