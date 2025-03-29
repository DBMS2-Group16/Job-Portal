import React, { useEffect, useState } from "react";
import "./Company.css";
import CompSlider from "./companyComps/compSlider";
import { Checkbox, CheckboxGroup, Stack } from "@chakra-ui/react";
import { BsFunnel } from "react-icons/bs";
import { ImOffice } from "react-icons/im";
import { BottomHire } from "./companyComps/bottomHire";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import ComapnyCard from "./companyComps/companyCard";
import { getCompany } from "../../Redux/Companies/actions";

const Company = () => {
  let companyList = useSelector((state) => state.company.companies);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    console.log(e.target.value);
    dispatch(getCompany(e.target.name, e.target.value));
  };

  useEffect(() => {
    dispatch(getCompany());
  }, []);

  return (
    <div>
      <div className="topHire">
        <b>Top companies hiring now</b>
      </div>
      
      <div className="company_main">
        <div className="comp_filters">
          <div className="comp_div">
            <BsFunnel fontSize={"20px"} />
            <b>Filters</b>
          </div>
          <hr />
          <div className="cat_checkbox">
            <p>Company type</p>
            <div>
              <CheckboxGroup colorScheme="orange" defaultValue={[]}>
                <Stack spacing={[1, 2]} onChange={handleChange}>
                  <Checkbox name="type" value="mnc">
                    MNCs
                  </Checkbox>
                  <Checkbox name="type" value="startup">
                    Startups
                  </Checkbox>
                  <Checkbox name="type" value="unicorn">
                    Unicorns
                  </Checkbox>
                  <Checkbox name="type" value="manufacturing">
                    Manufacturing
                  </Checkbox>
                  <Checkbox name="type" value="banking">
                    Banking & Finance
                  </Checkbox>
                </Stack>
              </CheckboxGroup>
            </div>
          </div>
          <hr />
   
        </div>

        <div className="comp_showlist">
         
          <div className="companies_list">
            {companyList?.map((ele) => {
              return <ComapnyCard key={ele.id} {...ele} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
