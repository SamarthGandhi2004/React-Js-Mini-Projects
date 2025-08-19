import React from 'react'

const Checkout = () => {
  return (
     <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-white p-6 rounded-2xl shadow">
          <h3 className="font-semibold">Shipping address</h3>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input placeholder="First name" />
            <Input placeholder="Last name" />
            <Input placeholder="Address" />
            <Input placeholder="City" />
            <Input placeholder="Postal code" />
          </div>
        </div>

        <aside className="bg-white p-6 rounded-2xl shadow">
          <h3 className="font-semibold">Order summary</h3>
          <div className="mt-4 text-slate-600">No items — UI placeholder.</div>
          <div className="mt-6">
            <Button>Proceed to payment</Button>
          </div>
        </aside>
      </div>
    </div>
  )
}

export default Checkout