import React, { useState } from "react";
import styles from "./style";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Paper } from "@material-ui/core";
import HeaderSearchIcon from "./HeaderSearchIcon";

export default function HeaderSearch({
  id,
  width,
  open,
  handleSearch,
  handleClear
}) {
  const classes = styles();
  const [search, setSearch] = useState("");
  console.log(open);

  return (
    <>
      <Paper
        className={`${classes.searchPaper} ${open && classes.show}`}
        style={{
          width: width
        }}
      >
        <TextField
          inputProps={{
            style: {
              padding: "6px"
            }
          }}
          variant="outlined"
          size="small"
          placeholder="Search"
          fullWidth
          type="search"
          value={search}
          onChange={event => {
            setSearch(event.target.value);
            //   setSearch({
            //     ...searchState,
            //     [id]: {
            //       ...searchState[id],
            //       search: event.target.value
            //     }
            //   });
          }}
        />
        <div
          style={{
            display: "flex",
            paddingTop: "10px"
          }}
        >
          <Button
            variant="outlined"
            size="small"
            className={classes.searchButton}
            onClick={() => handleSearch(search)}
          >
            Search
          </Button>
          <Button
            variant="outlined"
            size="small"
            className={classes.clearButton}
            onClick={() => {
              setSearch("");
              handleClear();
            }}
          >
            Clear
          </Button>
        </div>
      </Paper>
    </>
  );
}
