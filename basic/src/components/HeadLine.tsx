import { useEffect, useState, type ComponentPropsWithRef, type ElementType, type ReactNode } from 'react';

/* 컴포넌트 Props 파라메터
*/ 
type HeadLineProps<T extends ElementType> = {
  tag?: T;
  children: ReactNode;
} & ComponentPropsWithRef<T>;

function HeadLine<T extends ElementType>({
  tag: Tag = 'h2',
  children,
  ...rest
}: HeadLineProps<T>) {

  const [attrs, setAttrs] = useState<Object>({});

  useEffect( () => {
    
    // Object.assign( object1, object2 )
    setAttrs( attrs => ( 
      { 
        ...{ ...rest, ...attrs }, 
        ...{ itemProp: 'title', 'aria-label': rest.title } 
      } 
    ));

    return () => {
      console.log( 'Clean Up: <HeadLine />' );
    };
    
  }, [] );
 
  return <Tag className='text-2xl font-bold text-center mb-[1em]' {...attrs}>{children}</Tag>;
}

export { HeadLine };
