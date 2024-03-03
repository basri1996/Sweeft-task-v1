import styled from "styled-components";
import { getImagesStats } from "../service/ApiImage";
import { useState } from "react";
import download from "../images/download.png";
import view from "../images/view.png";
import like from "../images/like.png";

const Img = styled.div<{ path: string }>`
  background-image: url(${(props) => props.path});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 600px;
  width: 700px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const LowerDiv = styled.div<{ $isVisible: number }>`
  bottom: 0;
  left: 0;
  width: 700px;
  height: 200px;
  border-radius: 10px;
  margin-top: 400px;
  background-color: #00000051;
  opacity: ${(props) => (props.$isVisible)};
  transition: opacity 1s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const Statistic = styled.h1`
  font-size: 24px;
  font-weight: 500;
  color: white;
`;

const Image = ({ url, id }: any) => {
  const [visible, setVisible] = useState(false);
  const [statistics, setStatistics] = useState<any>({});

  const handleClick = async () => {
    const data = await getImagesStats(id);

    const statObj = {
      likes: data.data.likes.total,
      downloads: data.data.downloads.total,
      views: data.data.views.total,
    };
    setStatistics(statObj);
    setVisible(!visible);
  };

  return (
    <Img onClick={handleClick} path={url}>
      <LowerDiv $isVisible={visible ? 1 : 0}>
        <IconWrapper>
          <img src={download} alt="logo" />
          <Statistic>{statistics?.downloads}</Statistic>
        </IconWrapper>
        <IconWrapper>
          <img src={like} alt="logo" />
          <Statistic>{statistics?.likes}</Statistic>
        </IconWrapper>
        <IconWrapper>
          <img src={view} alt="logo" />
          <Statistic>{statistics?.views}</Statistic>
        </IconWrapper>
      </LowerDiv>
    </Img>
  );
};

export default Image;
