import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

interface ListProps {
  market: string;
  korean_name: string;
  english_name: string;
  market_warning: string;
}

export default function Home() {
  const [list, setList] = useState<ListProps[]>([]);
  const [loading, setLoading] = useState(false);

  const getList = async () => {
    setLoading(true);
    const response = await axios.get(
      "https://api.upbit.com/v1/market/all?isDetails=true"
    );
    setList(response.data);
    setLoading(false);
  };

  useEffect(() => {
    getList();
  }, []);
  console.log(list);
  return (
    <div>
      {loading ? (
        "로딩중"
      ) : (
        <ListWrap>
          {list.map((item) => {
            return (
              <ListItem key={item.market}>
                <Warning
                  style={{
                    color:
                      item.market_warning === "NONE" ? "#3549ff" : "#ff3b3b",
                  }}
                >
                  {item.market_warning === "NONE" ? "안전" : "위험"}
                </Warning>
                <Market>{item.market}</Market>
                <KR>{item.korean_name}</KR>
                <EN>{item.english_name}</EN>
              </ListItem>
            );
          })}
        </ListWrap>
      )}
    </div>
  );
}

export const ListWrap = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 10px;
`;

export const Market = styled.h6`
  font-size: 16px;
  font-weight: 700;
`;
export const ListItem = styled.div`
  min-height: 100px;
  padding: 10px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
`;

export const KR = styled.span`
  font-size: 14px;
`;
export const EN = styled.span`
  font-size: 14px;
`;

export const Warning = styled.div`
  font-size: 14px;
  font-weight: 700;
`;
