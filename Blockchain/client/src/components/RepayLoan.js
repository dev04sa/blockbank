const { ethers } = require("ethers");
function RepayLoan({ state }) {
  const repay = async (event) => {
    event.preventDefault();
    const { contract } = state;
    const loanId = document.getElementById("loanId").value;
    const amount = document.getElementById("amounts").value;
    const transaction = await contract.repayLoan(parseInt(loanId), {
      value: ethers.parseEther(amount),
    });
    await transaction.wait();
    console.log("Loan repaid");
  };
  return (
    <div className="flex flex-col gap-3 p-4 border border-slate-400 bg-gray-200 m-auto mt-4 w-1/3 items-center shadow-md">
      <form
        className="text-lg gap-2 flex flex-col align-middle items-center"
        onSubmit={repay}
      >
        <div className="flex gap-3">
          <label>Loan ID</label>
          <input
            className="border border-gray-500 pl-2 py-1"
            type="text"
            id="loanId"
            name="loanId"
            required
          />
        </div>
        <div className="flex gap-3">
          <label>Amount</label>
          <input
            className="border border-gray-500 pl-2 py-1"
            type="text"
            id="amounts"
            name="amount"
            required
          />
        </div>
        <div>
          <button
            className="bg-rose-600 rounded text-white px-3 py-1 font-semibold"
            type="submit"
          >
            Repay
          </button>
        </div>
      </form>
    </div>
  );
}

export default RepayLoan;
