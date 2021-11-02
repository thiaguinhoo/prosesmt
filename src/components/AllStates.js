import State from './State';

const AllStates = (props) => {
  
  const { states } = props;
  
  return (
    <div className="mt-3 row">
      { states.map(state => (
        <div key={ state.uf } className="col-lg-4 col-md-6 col-sm-12 my-3">
          <State state={ state } />
        </div>
      )) }
    </div>
  );
};

export default AllStates;