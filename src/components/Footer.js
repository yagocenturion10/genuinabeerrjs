import React from 'react';
import { Link } from 'react-router-dom';


var style = {
    backgroundColor: "black",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "100px",
    position: "relative",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",
};

const Footer = function(){
	return (

		<footer className="page-footer font-small blue pt-4" >
    <div className="container-fluid text-center text-md-left" >
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase"></h5>

				<img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAdVBMVEUAAAD////T09O7u7usrKw4ODixsbHu7u5ZWVnn5+crKyuVlZXh4eFhYWG+vr5PT0+FhYWMjIz19fURERHJyclmZmakpKTc3NxERES3t7cfHx+cnJx+fn4XFxcvLy9zc3M7OztcXFxubm4kJCRBQUELCwtJSUkWp0/oAAAER0lEQVR4nO3a23qiMBQFYA5WpCgKonhA0ap9/0cck723JpV21Bkn8M36r0gDmCwCxFjPAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHjEYFkkrtvQFWv/LF+5bkYnfPpa4LodnbCmsHzX7eiEjLLKXbejE6YUVs91O7phrLJKXbeiM2bVm+smwL90qufzgzcLs+NN1aYKs403K7Kt/OUzTEOtr0p1WsZluKeqccjS+elcrFIp1p731jNLhzmX0oU6rl/Gw2LS1LS0yN5f0OOnDQrfj9VG5fuRPcM+nqsKtXF+k5Ufsr9/ea3tc94uqGrGRf9TF6V2qQorqQutur23Cngz2l0+eDXJqDBRJ29PXOm1c6WKYHCt0jMjamlkTCcj7pu3WCbSUU4rt6YHKVcudKngEn1A71LqrZcS/4k/4UOV9HWjiEev6/5DhtRvLdEtq6UqVKWYtvt6t9P1EDno2mklpoJ50CVv2fNofBYfN+ZCnz/ZGJ6REbdrdLl5zOypkTsqZeaQqXSh1NtWWNwxnhIM7wiLXohWWJdRR8fx3bxW26V5QrdGZk/lAlN0PIdcUhW3Xz+E7bD4RqQ779mweHbPj4MFFSq1zTHKA9Oloiks6s6ctvnOGBkp2GHJA2dqVD0c1geXaqNZdP7UaqFTeWNYmSrEVlgVVx28r2FJBnpu8WxYfC18mT7M44iHdGqd0aWD3xjW/Lx98q2w5K03874LS2fwp2FlN02UN+prAnjEe3NY6rvuzgpLllf0c8RJWNMXRfCA5rDUDMcK6y2ZED1V/CdhbY+LgbqzWxTWsDEs1YGNNbKaDnphWOtSPUwztQLdorCSprAohchZWPx9iha+WhQWvw45LG6lnt9ITx8LK/gbYfE2Ta3CFoVFg2lIhcpMbkuNXN4e80NYMumiqufCqnl75plnbENYPJpoW1/FUGqocw0/xvwQlkzHaCb+XFgTKyx5D7ciLO+kngpqZqW/4Ueza42+pxp+X4i/D0tuIfpGaYclpZ0uSQi3Yck6D83m5a3cjrDOL74kyLOp9zmM+wOrIr1eYBM/+r+sw9BgkgETVNnoEg/lWFg7yu1Fqy9y6+mLZixdrC4Zt+m32e3Ga1genw2NRSbBX3Mlg8js53X8qIedBEITAqlYW4dRSYanfngepK5MrnW1595493P9cR3E1cH8y1sRMP1ur0oulTwEB0WU59FSrVolsud5+Lz3A2PH1VoOC9TM83ipSzbqHJMgz/Nhjy/fKkuLYrn1nIvu2Wnz6lZ0w8gP6vascLccrSPlUUyC3t51i1rs6H8Vt2O5u5XKm7T8we+P+k9N45uw8G8u35vcDK7KdZNa7ThWBh9Jr+TpJNylLlvxS0pXFBhZ96tuvzrDdzB1uN/06yoDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwF/yCzuiL4LmJFPxAAAAAElFTkSuQmCC' />
                

				
            </div>

            <hr className="clearfix w-100 d-md-none pb-0" />

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Contactenos</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Instagram</a></li>
                    <li><a href="#!">Facebook</a></li>
                    <li><a href="#!">Contactar por WhatsApp</a></li>
                    <li><a href="#!"></a></li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Donde encontrarnos</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Local : San Martín 258 - Comodoro Rivadavia </a></li>
                    <li><a href="#!">Ver en Google Maps</a></li>
                    <li><a href="#!"></a></li>
                    <li><a href="#!"> gian_scaph@gmail.com </a></li>
                </ul>
            </div>
        </div>


		<div className="footer-copyright text-center py-3" >GenuinaBeer © 2021  |  Políticas de Privacidad </div>
        
    
    </div>
</footer>
    

  			
		

		);
}

export default Footer;