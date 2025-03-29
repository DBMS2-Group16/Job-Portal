import React, { useEffect, useState } from "react";
import "./Jobs.css";
import { IoBagAddSharp } from "react-icons/io5";
import { Button, Skeleton, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import { IoBagOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineDocumentText } from "react-icons/hi";
import { TfiTimer } from "react-icons/tfi";
import { getJobs } from "../../Redux/Jobs/actions";
import { useDispatch, useSelector } from "react-redux";
const Jobs = () => {
  const Data = useSelector((store) => store.job.jobs);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getJobs());
  }, [dispatch]);
  console.log(Data);

  return (
    <div>
      <div className="jobs-1">
        <div className="recomend">
        </div>
        <div className="select">
        </div>
      </div>
      <div className="posting-jobs">
        <div className="section-1">
          {}
          <h2 className="total-jobs">
            {Data.length} Jobs are here !
          </h2>
          {Data?.map((item) => {
            return (
              <Link to={`/jobspage/${item.id}`} key={item.jobId}>
                <div className="job-data" key={item.id}>
                  <div className="data-marked">
                    <h2>{item.title}</h2>
                  </div>
                  <div className="company-jobs">{item.company}</div>
                  <div className="education">
                    <IoBagOutline className="icons-experience" />
                    <ul> {item.experience}</ul>
                    <ul>{item.salary}</ul>
                    <ul style={{ display: "flex", gap: "3px" }}>
                      <CiLocationOn className="loc-icon" />
                      {item.location}
                    </ul>
                  </div>
                  <div className="text-outline">
                    <HiOutlineDocumentText className="loc-icon" />{" "}
                    {item.candidate}
                  </div>

                  <div className="keyskill">
                    {item.keySkills.map((elem, index) => {
                      if (index < 2) {
                        return (
                          <span key={index} className="job-skills">
                            {elem}
                          </span>
                        );
                      }
                    })}
                  </div>
                  <div className="time-btn">
                    <Button size="xs">
                      <TfiTimer />
                      {item.posted}
                    </Button>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        {}
        
      </div>
    </div>
  );
};

export default Jobs;
