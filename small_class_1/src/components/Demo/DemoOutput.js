import React from 'react';
import MyParagraph from './MyParagraph';

const DemoOutput = props => {
    console.log('DemoOutput props');
    return <MyParagraph>
        {props.output ?  'New Output' : ''}
    </MyParagraph>
}


export default React.memo(DemoOutput);
