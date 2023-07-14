import Work from './Work';

/*
      <Suspense fallback={<div>suspend...</div>}>
        <Work />
      </Suspense>
*/
function Suspense() {
  return (
    <div>
      <Work />
    </div>
  );
}

export default Suspense;
