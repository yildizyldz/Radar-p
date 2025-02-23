import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../../redux/actions";
import Head from "./Head";
import Loader from "../Loader";
import Gallery from "./Gallery";
import Airport from "./Airport";
import Time from "./Time";
import Aircraft from "./Aircraft";
import Eror from "../Eror";

const Modal = () => {
  const dispatch = useDispatch();
  const { detailId, işLoading, eror, info } = useSelector(
    (store) => store.detail
  );

  useEffect(() => {
    // eğer id yoksa fonksiyonu durdur
    if (!detailId) return;

    // id'si bilenen uçuşun detaylarını al
    dispatch(getDetails(detailId));
  }, [detailId]);

  return (
    detailId && (
      <div className="modal-outer">
        <div className="modal-inner">
          <Head />

          {işLoading ? (
            <Loader />
          ) : eror ? (
            <Error message={eror} />
          ) : (
            info && (
              <div className="info-wrapper">
                <div>
                  <Gallery />
                  <Airport />
                  <Time />
                  <Aircraft />
                </div>
              </div>
            )
          )}
        </div>
      </div>
    )
  );
};

export default Modal;
