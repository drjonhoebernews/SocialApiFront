import React, { useState, useEffect, useMemo } from 'react';
import TableContainer from '../../Components/Common/TableContainer';

//redux
import { useSelector, useDispatch } from "react-redux";
import { Col} from 'reactstrap';

import {
  getYoutubeList
} from "../../store/actions";


// Formik
import { isEmpty } from "lodash";


import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from "../../Components/Common/Loader";



const AllYoutube = () => {
  const dispatch = useDispatch();

  const { youtubeList, isYoutubeCreated, isYoutubeSuccess, error } = useSelector((state) => ({
    youtubeList: state.YoutubeR.youtubeList,
    isYoutubeCreated: state.YoutubeR.isYoutubeCreated,
    isYoutubeSuccess: state.YoutubeR.isYoutubeSuccess,
    error: state.YoutubeR.error,
  }));

  const [YoutubeList, setYoutubeList] = useState([]);

  useEffect(() => {
    setYoutubeList(youtubeList);
  }, [youtubeList]);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(getYoutubeList()); // 5 saniyede bir getTaskList eylemini tetikle
    }, 60000); // 60 saniye (5000 milisaniye)

    return () => {
      clearInterval(interval); // Component unmount olduğunda zamanlayıcıyı temizle
    };
  }, [dispatch]);


  // Get Data
  useEffect(() => {
    if (!isEmpty(youtubeList)) setYoutubeList(youtubeList);
  }, [youtubeList]);

  useEffect(() => {
    if (youtubeList && !youtubeList.length) {
      dispatch(getYoutubeList());
    }
  }, [dispatch, youtubeList]);


  useEffect(() => {
    setYoutubeList(youtubeList);
  }, [youtubeList]);

  useEffect(() => {
    if (!isEmpty(youtubeList)) {
      setYoutubeList(youtubeList);
    }
  }, [youtubeList]);


  function formatDate(dateString) {
    const date = new Date(dateString);
    const formatter = new Intl.DateTimeFormat("tr-TR", {
      year: "numeric",
      month: "long",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });

    return formatter.format(date);
  }

  const columns = useMemo(
      () => [
        {
          Header: "Video ID",
          accessor: "video_id",
          filterable: false,
          Cell: (cellProps) => {
            const videoUrl = `https://www.youtube.com/watch?v=${cellProps.value}`;
            return (
                <a
                    href={videoUrl}
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "orange", textDecoration: "underline" }}
                >
                  {cellProps.value}
                </a>
            );
          },
        }
        ,
        {
          Header: "Video Bilgi",
          accessor: "title",
          filterable: false,
          Cell: (cellProps) => {
            return (
                <div
                    style={{
                      whiteSpace: "pre-wrap",
                      wordWrap: "break-word",
                    }}
                >
                  {cellProps.value}
                </div>
            );
          },
        },
        {
          Header: "Video Açıklama",
          accessor: "description",
          filterable: false,
          Cell: (cellProps) => {
            return (
                <div
                    style={{
                      whiteSpace: "pre-wrap",
                      wordWrap: "break-word",
                    }}
                >
                  {cellProps.value}
                </div>
            );
          },
        },
        {
          Header: "Tarih",
          accessor: "publish_date",
          filterable: false,
          Cell: (cellProps) => {
            const date = new Date(cellProps.value);
            const formattedDate = date.toLocaleString("tr-TR", {
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit"
            });
            return <>{formattedDate}</>;
          }
        }
      ],
      []
  );


  const sortedYoutubeList = youtubeList.sort((b, a) => {
    return new Date(b.publish_date) - new Date(a.publish_date);
  });

  return (
    <React.Fragment>
      <div className="row">
        <Col lg={12}>
          <div className="card" id="tasksList">
            <div className="card-header border-0">
              <div className="d-flex align-items-center">
                <h5 className="card-title mb-0 flex-grow-1">Tüm Youtube Verileri</h5>
                <div className="flex-shrink-0">
                  <div className="d-flex flex-wrap gap-2">
                    <button className="btn btn-danger add-btn me-1"><i className="ri-add-line align-bottom me-1"></i> Kelime Ekle</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-body pt-0">
              {isYoutubeSuccess && youtubeList.length ? (
                <TableContainer
                  columns={columns}
                  data={sortedYoutubeList}
                  isGlobalFilter={true}
                  // isAddUserList={false}
                  customPageSize={100}
                  className="custom-header-css"
                  divClass="table-responsive table-card mb-3"
                  tableClass="align-middle table-nowrap mb-0"
                  theadClass="table-light text-muted table-nowrap"
                  thClass="table-light text-muted"
                  // handleTaskClick={handleTaskClicks}
                  // isTaskListFilter={true}
                  SearchPlaceholder="Kelimenizi arayınız.."
                />
              ) : (<Loader error={error} />)
              }
              <ToastContainer closeButton={false} limit={1} />
            </div>
          </div>
        </Col>
      </div>
    </React.Fragment>
  );
};

export default AllYoutube;