import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './style.css';

class RequestViewRp extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        const { 
            umutiView,
            wrapperClass,
            tabOneTitle,
            tabTwoTitle,
            viewTitle,
            requestTitle,
            requestSubTitle,
            repliesViewTable,
            suggestionViewTable,
            pharmacyTitleColor,
            approveBtn,
            approveSelecteBtn
        } = this.props;
        return(
            <div className={`row reset-row create-wrapper orderWrapper ${umutiView}`}>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-reset">
                <Tabs>
                    <TabList>
                        <Tab><h5><span className="request-tab">{tabOneTitle}</span></h5></Tab>
                        <Tab><h5><span className="request-tab">{tabTwoTitle}</span></h5></Tab>
                    </TabList>
                    <TabPanel>
                        <div className={`create-content shadow-box ${wrapperClass}`}>
                            <div className="create-header">
                                <span className="umuti-create-title">{viewTitle}</span>
                                <span>
                                    {approveSelecteBtn}
                                    {approveBtn}
                                </span>
                            </div>
                            <div className="row reset-row create-form form-container">
                                <div className="pharmacy-title" style={{color: pharmacyTitleColor}}>{requestTitle}</div>
                                <div className="pharmacy-subtitle">{requestSubTitle}</div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-reset">
                                    {repliesViewTable}
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className={`create-content shadow-box ${wrapperClass}`}>
                            <div className="create-header">
                                <span className="umuti-create-title">{viewTitle}</span>
                                <span>
                                    {approveSelecteBtn}
                                    {approveBtn}
                                </span>
                            </div>
                            <div className="row reset-row create-form form-container">
                                <div className="pharmacy-title" style={{color: pharmacyTitleColor}}>{requestTitle}</div>
                                <div className="pharmacy-subtitle">{requestSubTitle}</div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-reset">
                                    {suggestionViewTable}
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                </Tabs>
                </div>
            </div>
        );
    }
};

export default RequestViewRp;







  