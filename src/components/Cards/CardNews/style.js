import { styled } from "frontity";
export const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  border-radius: 0.25rem;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    pointer-events: auto;
  }
  img {
    height: 225px;
    width: 100%;
    display: block;
    border-top-left-radius: calc(0.25rem - 1px);
    border-top-right-radius: calc(0.25rem - 1px);
    vertical-align: middle;
    border-style: none;
  }
`;

export const BoddyCard = styled.div`
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  padding: 1.25rem;
  h5 {
    margin: 0;
    margin-bottom: 0.75rem;
    color: black;
    font-size: 1.2em;
  }
  p {
    font-size: 14px;
    color: #515151;
  }
`;

