import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import "./skeleton.css";

export const ImageSkeleton = () => {
  return (
    <div className="skeleton-container">
      <Stack spacing={1}>
        <Skeleton
          variant="rectangular"
          height={300}
          sx={{ bgcolor: "grey.900" }}
          animation="wave"
        />
      </Stack>
    </div>
  );
};
export const Image2Skeleton = () => {
  return (
    <Stack spacing={1}>
      <Skeleton variant="rectangular" height={400} animation="wave" />
    </Stack>
  );
};

export function TextSkeleton() {
  return (
    <div className="skeleton-container">
      <Stack spacing={0.5}>
        <Skeleton variant="text" height={40} />
        <Skeleton variant="text" height={40} />
        <Skeleton variant="text" height={40} />
        <Skeleton variant="text" height={40} />
        <Skeleton variant="text" height={40} />
        <Skeleton variant="text" height={40} />
      </Stack>
    </div>
  );
}
export const Card1Skeleton = () => {
  return (
    <div className="skeleton-container">
      <Stack spacing={1}>
        <Skeleton variant="rounded" height={80} sx={{ bgcolor: "grey.900" }} />
        <Skeleton variant="rounded" height={80} sx={{ bgcolor: "grey.900" }} />
      </Stack>
    </div>
  );
};
export const Card2Skeleton = () => {
  return (
    <div className="card2-skeleton">
      <Skeleton variant="rounded" height={180} width={195} />
      <Skeleton variant="rounded" height={180} width={195} />
    </div>
  );
};
