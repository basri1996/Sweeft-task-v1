import { getImages, getImagesByName } from "../service/ApiImage";
import {
  ImageStateTypes,
  addImageData,
  getImageData,
  setCachedData,
  setLoading,
  unsetLoading,
} from "../slices/imageSlice";
import Image from "../components/Image";
import styled from "styled-components";
import InputComponent from "../components/InputComponent";
import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useAppContext } from "../context/AppContext";

const WrapperDivImage = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
const WrapperDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  margin-top: 30px;
`;

function Home() {
  const { value, setValue } = useAppContext()
  const { isLoading, cachedData,imageArray } = useSelector(
    (state: ImageStateTypes) => state.image);
  const dispatch = useDispatch();

  const handleScroll = useCallback(async () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      isLoading
    ) {
      return;
    }
    const pageNum = Math.floor(imageArray.length / 10)
    if (value) {
      const data = await getImagesByName(pageNum+1, value);
      dispatch(addImageData(data));
      dispatch(setCachedData({value,data:[...cachedData[value],...data]}))
    }else{
      const data = await getImages(pageNum+1);
      dispatch(addImageData(data));
    }
  }, [
    isLoading,
    dispatch,
    value,
    cachedData,
    imageArray.length,
  ]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading, handleScroll]);

  useEffect(() => {
    async function loader() {
      dispatch(setLoading());
      let data = await getImages(1);
      dispatch(unsetLoading());
      return dispatch(getImageData(data));
    }
   !value && loader();
  }, [dispatch,value]);

  return (
    <WrapperDiv>
      <InputComponent setValue={setValue} value={value}/>
      <WrapperDivImage>
        {imageArray?.map((img: any) => (
          <Image key={img.id} url={img.urls.full} id={img.id} />
        ))}
      </WrapperDivImage>
    </WrapperDiv>
  );
}

export default Home;
