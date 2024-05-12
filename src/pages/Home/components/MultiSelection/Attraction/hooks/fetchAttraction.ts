import { backend_dev } from "../../../../../../service";

export const fetchAttraction = async (
  province?: { value: string; label: string } | null
) => {
  const standardLocation = province?.label.replace(" ", "+");
  console.log(standardLocation);
  const params = {
    province: standardLocation || "",
  };
  const response = await fetch(
    backend_dev.search + `attractions?province=${params.province}`
  );
  const result = await response.json();
  console.log(await result);
  return result;
};
