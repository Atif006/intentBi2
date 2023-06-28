import React from "react";
import Paper from "@mui/material/Paper";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
const ScoreTable = ({ data }) => {
  return (
    <>
      <TableContainer component={Paper}>
        <Table
          sx={{
            minWidth: "70%",
            maxWidth: "80%",
            marginLeft: "10%",
            marginTop: "80px",
          }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow sx={{ background: "gray" }}>
              <TableCell sx={{ fontWeight: 500 }}>Teams</TableCell>
              <TableCell sx={{ fontWeight: 500 }} align="right">
                M
              </TableCell>
              <TableCell sx={{ fontWeight: 500 }} align="right">
                W
              </TableCell>
              <TableCell sx={{ fontWeight: 500 }} align="right">
                L
              </TableCell>
              <TableCell sx={{ fontWeight: 500 }} align="right">
                NRR
              </TableCell>
              <TableCell sx={{ fontWeight: 500 }} align="right">
                Pts
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, ind) => {
              return (
                <TableRow key={ind} sx={{ minWidth: "650px" }}>
                  <TableCell component="th" scope="roe">
                    {`${ind + 1}     ${row.tName} `}
                  </TableCell>
                  <TableCell component="th" scope="row" align="right">
                    {row.M}
                  </TableCell>
                  <TableCell component="th" scope="row" align="right">
                    {row.W}
                  </TableCell>
                  <TableCell component="th" scope="row" align="right">
                    {row.L}
                  </TableCell>
                  <TableCell component="th" scope="row" align="right">
                    {row.NRR}
                  </TableCell>
                  <TableCell component="th" scope="row" align="right">
                    {row.Pts}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ScoreTable;
