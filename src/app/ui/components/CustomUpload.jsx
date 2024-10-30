export default function CustomUpload() {
  return (
    <div>
      <label
        className="hover:cursor-pointer flex w-fit font-mono text-lg tracking-widest py-1 font-medium border-b border-foreground text-foreground hover:text-accent-600 hover:border-accent-600"
        htmlFor="image"
      >
        UPLOAD IMAGE
      </label>

      <input
        // style={{
        //   opacity: 0,
        //   width: "0.1px",
        //   height: "0.1px",
        //   position: "absolute",
        // }}
        type="file"
        name="image"
        id="image"
        multiple
        accept="image/*"
      />
    </div>
  );
}
