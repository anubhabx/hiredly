import LocalFont from "next/font/local";

const satoshi = LocalFont({
  src: [
    {
      path: "./font/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./font/Satoshi-Medium.woff2",
      weight: "500",
      style: "semibold",
    },
    {
      path: "./font/Satoshi-Bold.woff2",
      weight: "700",
      style: "bold",
    },
    {
      path: "./font/Satoshi-Black.woff2",
      weight: "900",
      style: "black",
    },
  ],
});

const FontProvider = ({ children }: { children: React.ReactNode }) => {
  return <div className={satoshi.className}>{children}</div>;
};

export default FontProvider;
