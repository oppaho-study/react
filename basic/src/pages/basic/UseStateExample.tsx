import { useCallback, useEffect, useState, type ReactNode } from 'react';
import { HeadLine } from '../../components/HeadLine';

interface ButtonComponentProps {
  onClick: ( e: React.MouseEvent<HTMLButtonElement> ) => void;
  children: ReactNode;
}

/* 컴포넌트: 버튼 (Button)
*/
function ButtonComponent( { onClick, children }: ButtonComponentProps ) {
  return (
    <button 
      onClick={onClick}
      type="button" 
      className="border-1 border-white rounded-sm"
    >
      {children}
    </button>
  );
}

/* 컴포넌트: <ul> 아이템
*/
function RowItem() {

  const [ count, setCount ] = useState<number>(0);

  useEffect( () => {
    setCount( 0 );
  }, [] );

  // 이벤트 콜백 정의
  const increment = useCallback( () => {
    setCount( (prev) => prev + 1 );
  }, [] );
  const decrement = useCallback( () => {
    setCount( (prev) => prev - 1 );
  }, [] );

  return (
    <li className='flex flex-row items-center gap-[1em] px-[2.5em] py-[0.5em] border-b-1 border-white'> 
      <p>{count}</p>
      <ButtonComponent onClick={increment}>+ (Plus)</ButtonComponent>
      <ButtonComponent onClick={decrement}>- (Minus)</ButtonComponent>
    </li>
  );
}

/* 컨텐츠 
*/
export default function UseStateExample() {

  const [ rowcount, setRowcount ] = useState<number>( 2 );

  // 이벤트 콜백 정의 
  const addRowItem = useCallback( () => {
    setRowcount( (prev) => prev + 1 );
  }, [] );
  const removeRowItem = useCallback( () => {
    setRowcount( (prev) => prev - 1 );
  }, [] );
  
  return (
    <div className="block">
      <HeadLine
        tag="h2"
        title="UseStateExample"
      >
        UseStateExample
      </HeadLine>
      <div className="block">
        <ul className='' >
          { Array.from( {length: rowcount} ).fill(0).map( (_, index) => (<RowItem key={index} />) ) }
        </ul>
        <div className='flex flex-row gap-[1em] p-[1em]'> 
          <ButtonComponent onClick={addRowItem}>+ Add Row Item</ButtonComponent>
          <ButtonComponent onClick={removeRowItem}>- Remove Row Item</ButtonComponent>
        </div>
      </div> 

    </div>
  );
}