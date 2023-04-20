import React, { useState, useEffect, useMemo } from 'react';
import TableContainer from '../../Components/Common/TableContainer';

//redux
import { useSelector, useDispatch } from "react-redux";
import { Col} from 'reactstrap';

import {
  getGoogleList
} from "../../store/actions";


// Formik
import { isEmpty } from "lodash";


import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from "../../Components/Common/Loader";



const AllGoogle = () => {
  const dispatch = useDispatch();

  const { googleList, isGoogleCreated, isGoogleSuccess, error } = useSelector((state) => ({
    googleList: state.Googler.googleList,
    isGoogleCreated: state.Googler.isGoogleCreated,
    isGoogleSuccess: state.Googler.isGoogleSuccess,
    error: state.Googler.error,
  }));

  const [GoogleList, setGoogleList] = useState([]);

  useEffect(() => {
    setGoogleList(googleList);
  }, [googleList]);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(getGoogleList()); // 5 saniyede bir getTaskList eylemini tetikle
    }, 60000); // 60 saniye (5000 milisaniye)

    return () => {
      clearInterval(interval); // Component unmount olduğunda zamanlayıcıyı temizle
    };
  }, [dispatch]);


  // Get Data
  useEffect(() => {
    if (!isEmpty(googleList)) setGoogleList(googleList);
  }, [googleList]);

  useEffect(() => {
    if (googleList && !googleList.length) {
      dispatch(getGoogleList());
    }
  }, [dispatch, googleList]);


  useEffect(() => {
    setGoogleList(googleList);
  }, [googleList]);

  useEffect(() => {
    if (!isEmpty(googleList)) {
      setGoogleList(googleList);
    }
  }, [googleList]);


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
          Header: "Başlık",
          accessor: "title",
          filterable: false,
          Cell: (cellProps) => {
            const link = cellProps.row.original.link;
            return (
                <a
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      color: "orange",
                      textDecoration: "underline",
                      whiteSpace: "pre-wrap",
                      wordWrap: "break-word",
                    }}
                >
                  {cellProps.value}
                </a>
            );
          },
        },
        {
          Header: "Özet",
          accessor: "snippet",
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
      ],
      []
  );


  return (
    <React.Fragment>
      <div className="row">
        <Col lg={12}>
          <div className="card" id="tasksList">
            <div className="card-header border-0">
              <div className="d-flex align-items-center">
                <h5 className="card-title mb-0 flex-grow-1">Tüm Google Verileri</h5>
                <div className="flex-shrink-0">
                  <div className="d-flex flex-wrap gap-2">
                    <button className="btn btn-danger add-btn me-1"><i className="ri-add-line align-bottom me-1"></i> Kelime Ekle</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-body pt-0">
              {isGoogleSuccess && googleList.length ? (
                <TableContainer
                  columns={columns}
                  data={googleList}
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

export default AllGoogle;