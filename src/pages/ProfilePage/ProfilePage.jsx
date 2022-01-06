import React from "react";
import ProfileLeftSidebar from "./ProfileLeftSidebar";
import ProfilePageBreadCrumbs from "./ProfilePageBreadCrumbs";
import ProfileTableHead from "./ProfileTableHead";

const ProfilePage = ({ lang }) => {
  return (
    <div className="container-fluid ya-container-fluid">
      <div className="ya-page-block ya-profile-page">
        <ProfilePageBreadCrumbs lang={lang} />
        <div className="row">
          <div className="col-md-4">
            <ProfileLeftSidebar lang={lang} />
          </div>
          <div className="col-md-8">
              {lang === '/uz' && <h3 className="modal-title mb-4">Buyrtmalar tarixi</h3>}
              {lang === '/ru' && <h3 className="modal-title mb-4">История заказов</h3>}
              {lang === '/en' && <h3 className="modal-title mb-4">Order history</h3>}
            <table className="table table-striped history-table">
              <ProfileTableHead lang={lang} />
              <tbody></tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
