import { useSelector } from "react-redux";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ImageStateTypes, getImageData } from "../slices/imageSlice";
import {
  HistoryStateTypes,
} from "../slices/historySlice";
import { useAppContext } from "../context/AppContext";

const H1 = styled.h1`
  font-size: 24px;
  font-weight: 500;
  color: black;
`;
const WrapperDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  margin-top: 30px;
`;

function History() {
  const { setValue } = useAppContext()

  const { historyArray } = useSelector(
    (state: HistoryStateTypes) => state.history
  );
  const { cachedData } = useSelector((state: ImageStateTypes) => state.image);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function handleNavigation(query: string) {
    dispatch(getImageData(cachedData[query]));
    setValue(query)
    navigate('/');
  }

  return (
    <WrapperDiv>
      {historyArray?.map((el: string,index:number) => (
        <H1 onClick={() => handleNavigation(el)} key={index}>{el}</H1>
      ))}
    </WrapperDiv>
  );
}

export default History;
