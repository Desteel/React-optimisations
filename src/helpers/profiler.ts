import { ProfilerOnRenderCallback } from "react";

export const profilerCallback: ProfilerOnRenderCallback = (
  id,
  phase,
  actualTime,
  baseTime
) => {
  console.log("");
  console.log(`${id}'s ${phase} phase:`);
  console.log(`Actual time: ${actualTime}`);
  console.log(`Base time: ${baseTime}`);
  console.log("");
};
