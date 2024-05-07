import React from "react";
import { DatePicker } from "antd";
import type { GetProps } from "antd";
import dayjs from "dayjs";
import type { SelectProps } from "antd";
import Select from "react-select";
import { SwapRightOutlined } from "@ant-design/icons";
type RangePickerProps = GetProps<typeof DatePicker.RangePicker>;
const disabledDate: RangePickerProps["disabledDate"] = (current) => {
  // Can not select days before today and today
  return current && current < dayjs().endOf("day");
};
const options: SelectProps["options"] = [
  { label: "Hanoi", value: "HN" },
  { label: "Danang", value: "DN" },
  { label: "PhuQuoc", value: "PQ" },
  { label: "HCM", value: "HCM" },
];
const { RangePicker } = DatePicker;
const SearchBar: React.FC = () => {
  return (
    <>
      <div className="flex-2 flex flex-col gap-1">
        <div className="flex flex-row gap-1">
          <span>Start date</span>
          <SwapRightOutlined />
          <span>End date</span>
        </div>
        <RangePicker
          disabledDate={disabledDate}
          placement="bottomLeft"
          size="large"
        />
      </div>
      <div className="flex-2 flex flex-col pl-2 gap-1">
        <div className="flex flex-row gap-1">
          <span>From</span>
          <SwapRightOutlined />
          <span>To</span>
        </div>
        <div className="flex flex-row gap-2">
          <Select
            isClearable
            isSearchable
            options={options}
            placeholder="From"
            className="min-w-40"
          />
          <Select
            isClearable
            isSearchable
            options={options}
            placeholder="To"
            className="min-w-40"
          />
        </div>
      </div>
      <div className="flex-1 px-2 flex flex-col gap-1">
        <div className="self-start">Budget</div>
        <input
          type="string"
          className="border border-gray-300 rounded-lg outline-none h-10 pl-2"
        />
      </div>
      <button className="flex-1 text-white border-none bg-green-400 rounded-lg font-bold m-2">
        Search
      </button>
    </>
  );
};

export default SearchBar;
