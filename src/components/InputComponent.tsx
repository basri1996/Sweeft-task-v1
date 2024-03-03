import styled from "styled-components";
// import { UseAppContext } from "../context/AppContext";
import { useCallback, useMemo } from "react";
import debounce from "debounce";
import { getImagesByName } from "../service/ApiImage";
import {
  getImageData,
  setLoading,
  unsetLoading,
  setCachedData,
} from "../slices/imageSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { HistoryStateTypes, addToHistory } from "../slices/historySlice";

const Input = styled.input`
  width: 50%;
  height: 40px;
  outline: none;
  border-radius: 15px;
  padding: 20px;
  font-size: 17px;
  font-weight: 700;
`;

const InputComponent = ({ setValue, value }: any) => {
  const { cachedData } = useSelector((state: any) => state.image);
  const { historyArray } = useSelector(
    (state: HistoryStateTypes) => state.history
  );

  const dispatch = useDispatch();

  const sendRequest = useCallback(
    async (value: string) => {
      const isExisted = historyArray.includes(value);
      if (!value) return;
      if (!isExisted) {
        dispatch(setLoading());
        const data = await getImagesByName(1, value);
        dispatch(addToHistory(value));
        dispatch(getImageData(data));
        dispatch(unsetLoading());
        dispatch(setCachedData({ data, value }));
      } else {
        dispatch(getImageData(cachedData[value]));
      }
    },

    [dispatch, cachedData, historyArray]
  );

  const debouncedSendRequest = useMemo(() => {
    return debounce(sendRequest, 1000);
  }, [sendRequest]);

  const onChange = (e: any) => {
    const value = e.target.value;
    setValue(value);
    debouncedSendRequest(value);
  };

  return (
    <>
      <Input
        value={value}
        onChange={(e) => onChange(e)}
        placeholder="Search Your Photo Here ..."
      />
    </>
  );
};

export default InputComponent;
