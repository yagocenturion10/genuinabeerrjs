import React from 'react';

const Loading = function(){
	return(
		<div className="text-center mt-5">
  			<div className="spinner-border" role="status">
    			<span className="sr-only">Cargando...</span>
  			</div>
		</div>
		);
}

export default Loading;
