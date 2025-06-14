import { useForm } from "react-hook-form";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm();
  const onSubmit = (data) =>
    alert(`Thanks ${data.name}! We'll get back to you.`);
  return (
    <section className="section">
      <div className="container grid md:grid-cols-2 gap-10">
        <div>
          <h1 className="h1">Contact</h1>
          <p className="lead mt-2">We’d love to hear from you.</p>
          <div className="mt-6 card p-6">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Name</label>
                <input
                  className="mt-1 w-full rounded-md border-slate-300"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <p className="text-sm text-red-600">Name is required</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  className="mt-1 w-full rounded-md border-slate-300"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <p className="text-sm text-red-600">Email is required</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium">Message</label>
                <textarea
                  rows="4"
                  className="mt-1 w-full rounded-md border-slate-300"
                  {...register("message", { required: true })}
                />
                {errors.message && (
                  <p className="text-sm text-red-600">Message is required</p>
                )}
              </div>
              <button className="btn w-full">Send Message</button>
              {isSubmitSuccessful && (
                <p className="text-green-600">Submitted! We’ll reply soon.</p>
              )}
            </form>
          </div>
        </div>
        <iframe
          title="Map"
          className="w-full h-96 rounded-xl border"
          src="https://maps.google.com/maps?q=Dhaka&t=&z=11&ie=UTF8&iwloc=&output=embed"
          loading="lazy"
        />
      </div>
    </section>
  );
}
