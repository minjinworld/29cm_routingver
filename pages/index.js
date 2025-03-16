import { useRef } from "react";
import Card from "./Card";
import { useCard } from "../context/CardContext";

const App = ({ selectedCategory }) => {
  const { cardData, addCards } = useCard(); // ✅ 전역 데이터 가져오기
  const bottomRef = useRef(null);

  const filteredData =
    selectedCategory === "전체"
      ? cardData
      : cardData.filter((data) => data.category === selectedCategory);

  return (
    <div className="container_wrap">
      <div className="flex_box">
        {filteredData.map((data, index) => (
          <Card
            key={data.id}
            {...data}
            ref={index === filteredData.length - 1 ? bottomRef : null} // ✅ 마지막 카드에 ref 적용
          />))}
        <div ref={bottomRef}></div>
      </div>

      <button className="addbtn addbtn text-[#333] text-[20px] font-[800] w-[200px] h-[50px] rounded-[8px] border border-solid border-[#333] mx-auto mb-[50px] flex justify-center items-center mt-[50px]" onClick={() => {
        addCards();
        setTimeout(() => {
          bottomRef.current?.scrollIntoView({ behavior: "smooth" }); // ✅ 마지막 카드로 스크롤 이동
        }, 100);
      }}>
        더보기
      </button>
    </div>
  );
};

export default App;
