import React, { useState } from "react";
import { Box, Typography, Checkbox, Paper } from "@material-ui/core";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import styles from "./style";
import { useDispatch, useSelector } from "react-redux";
import {
  changeSortType,
  changeMultipleSortType
} from "../../redux/action/sort";
import _ from "lodash";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { searchFilterChange } from "../../redux/action/filter";
import HeaderTitle from "./header/header-title/HeaderTitle";
import HeaderSearchIcon from "./header/header-search/HeaderSearchIcon";
import HeaderSearch from "./header/header-search/HeaderSearch";

const header = [
  {
    title: "checkbox",
    type: "checkbox",
    sort: null,
    width: "60px"
  },
  {
    title: "AVATAR",
    type: "text",
    sort: null,
    width: "70px"
  },
  {
    title: "NAME",
    type: "text",
    sort: "name",
    static: true,
    search: true,
    width: "180px"
  },
  {
    title: "CAR",
    type: "text",
    sort: "car",
    search: true,
    width: "150px"
  },
  {
    title: "TYPE",
    type: "text",
    sort: "type",
    search: true,
    width: "150px"
  },
  {
    title: "PRICE",
    type: "text",
    sort: "price",
    search: true,
    width: "100px"
  },
  {
    title: "ONLINE",
    type: "text",
    sort: "isOnline",
    width: "60px"
  },
  {
    title: "DATE",
    type: "text",
    sort: "date",
    width: "150px"
  },
  {
    title: "TEXT",
    type: "text",
    sort: "text",
    width: "536px"
  }
];

const searchData = [
  {
    id: "name",
    width: "182px",
    left: "148px",
    fix: true
  },
  {
    id: "car",
    width: "152px",
    left: "346px"
  },
  {
    id: "type",
    width: "154px",
    left: "514px"
  },
  {
    id: "price",
    width: "138px",
    left: "680px"
  }
];

export default function Header({ index, style }) {
  const classes = styles();
  const dispatch = useDispatch();
  const { sort } = useSelector(state => state.sort);
  let offsetLeft = useSelector(state => state.table.offsetLeft);
  offsetLeft = offsetLeft > 160 ? offsetLeft - 160 : 0;

  const addSort = type => {
    const sorting = _.find(sort, { type });

    if (!sorting) {
      return [{ type, asc: true }];
    } else {
      if (sorting.asc) {
        return [{ type, asc: false }];
      } else {
        return [];
      }
    }
  };

  const addMultipleSort = type => {
    const sorting = _.find(sort, { type });

    if (!sorting) {
      return [...sort, { type, asc: true }];
    } else {
      if (sorting.asc) {
        return _.map(sort, function(sort) {
          return sort.type === type ? { type, asc: false } : sort;
        });
      } else {
        return _.map(sort, function(sort) {
          return sort.type === type ? [] : sort;
        });
      }
    }
  };

  return (
    <>
      <div style={style} className={`${classes.header} sticky`}>
        {header.map(data => {
          return (
            <div
              key={data.title}
              style={{
                position: "relative",
                left: data.static ? `${offsetLeft}px` : "0px",
                zIndex: data.static ? 4 : 1
              }}
            >
              <div
                className={`${classes.column}`}
                style={{ width: data.width }}
              >
                <HeaderTitle
                  {...data}
                  handleClick={() =>
                    dispatch(changeSortType(addSort(data.sort)))
                  }
                  handleShiftClick={() =>
                    dispatch(changeMultipleSortType(addMultipleSort(data.sort)))
                  }
                />
                {data.search && <HeaderSearchIcon {...data} />}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
