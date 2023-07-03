import PropTypes from "prop-types";
import Button from "./Button";

export default function Form({ data, handleFormSubmit, handleFormChange, handleCancel, categories }) {
  return (
    <form className="flex flex-col gap-4 px-16 py-8 border-2 border-slate-950">
      <fieldset className="flex flex-col gap-2">
        <label htmlFor="product" className="w-1/6 font-semibold">
          {"Product"}:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={data.name}
          onChange={handleFormChange}
          className="border-b-2 outline-none grow bg-orange-50 border-slate-950"
        />
      </fieldset>
      <fieldset className="flex flex-col gap-2">
        <label htmlFor="category" className="w-1/6 font-semibold">
          Category:
        </label>
        <select
          name="category"
          value={data.category}
          onChange={handleFormChange}
          className="border-b-2 outline-none grow bg-orange-50 border-slate-950"
        >
          {categories.map((category, index) => {
            return (
              <option key={index} value={category}>
                {category}
              </option>
            );
          })}
        </select>
      </fieldset>
      <fieldset className="flex flex-col gap-2">
        <label htmlFor="unit_price" className="w-1/6 font-semibold">
          Unit price:
        </label>
        <input
          type="number"
          id="unit_price"
          name="unit_price"
          value={data.unit_price}
          onChange={handleFormChange}
          className="border-b-2 outline-none grow bg-orange-50 border-slate-950"
        />
      </fieldset>
      <fieldset className="flex flex-col gap-2">
        <label htmlFor="quantity" className="w-1/6 font-semibold">
          Quantity:
        </label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          value={data.quantity}
          onChange={handleFormChange}
          className="border-b-2 outline-none grow bg-orange-50 border-slate-950"
        />
      </fieldset>
      <div className="flex justify-end gap-4">
        <Button
          color="negative"
          func={(e) => {
            e.preventDefault();
            handleCancel();
          }}
        >
          Cancel
        </Button>
        <Button
          color="positive"
          func={(e) => {
            e.preventDefault();
            handleFormSubmit();
          }}
        >
          Save
        </Button>
      </div>
    </form>
  );
}

Form.propTypes = {
  data: PropTypes.object,
  handleFormChange: PropTypes.func,
  handleFormSubmit: PropTypes.func,
  handleCancel: PropTypes.func,
  categories: PropTypes.array,
};
