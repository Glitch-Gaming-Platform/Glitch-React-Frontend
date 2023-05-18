import Datetime from 'react-datetime';

//Currently using https://github.com/arqex/react-datetime

const Date = ({onChange, value}) => {
    return (<Datetime onChange={onChange} value={value} />);
}

export default Date;