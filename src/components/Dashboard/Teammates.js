import axios from "axios";
import React, { useEffect, useState } from "react";
import baseUrl from "../../utils/baseUrl";

const Teammates = ({ commName, commId }) => {
  const [mates, setMates] = useState([]);

  const getMates = async () => {
    try {
      const { data } = await axios.get(
        `${baseUrl}/committees/members/${commId}`
      );
      setMates([...data]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMates();
  }, []);

  return (
    <div class=" overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <caption class="p-5 text-lg font-semibold text-left rtl:text-right ">
          Members of {commName}
        </caption>
        <thead class="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" class="px-6 py-3">
              Name
            </th>
            <th scope="col" class="px-6 py-3">
              Email
            </th>
          </tr>
        </thead>
        {mates.map((data) => (
          <>
            <tbody>
              <tr class="bg-white border-b">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  {data.firstname} {data.lastname}
                </th>
                <td class="px-6 py-4">{data.email}</td>
              </tr>
            </tbody>
          </>
        ))}
      </table>
    </div>
  );
};

export default Teammates;
