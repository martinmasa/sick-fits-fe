import Link from 'next/link';
import SingleItem from '../components/SingleItem';

const Item = (props) => {
  return (
    <div>
      <p>Item</p>
      <SingleItem id={props.query.id} />
    </div>
  );
};

export default Item;
