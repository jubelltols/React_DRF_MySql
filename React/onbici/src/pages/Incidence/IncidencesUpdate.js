import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from "react-router-dom";

import { useIncidences } from '../../hooks/useIncidences'
import { useTranslation } from "react-i18next";

export default function IncidencesUpdate() {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { incidences, updateIncidence } = useIncidences()
    const { id } = useParams()
    const { t } = useTranslation("global");

    return (
        <section className="min-h-screen bg-base-content">
            <div className="flex flex-col items-center justify-center max-w-5xl mx-auto lg:py-16 px-6 py-8">
                <div className="grid grid-cols-3 mb-3 self-start">
                    <div className="col-span-2">
                        <p className="mb-4 text-4xl font-bold text-base-100">Update incidence</p>
                    </div>
                </div>
                <div className="w-full bg-base-100 rounded-lg shadow">
                    <div className="p-16 sm:p-10 space-y-4 md:space-y-6">
                        <form className="space-y-4 md:space-y-6 needs-validation" onSubmit={handleSubmit(data => updateIncidence(id, data))}>
                            {incidences.map(( incidence, index ) => (
                                incidence.id.toString() === id ?
                                <>
                                    <div className="row g-3 mt-1">
                                        <div className="col-sm-12">
                                            <label htmlFor="status" className="block mb-2 text-sm font-medium">station</label>
                                            <input className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" type="number" disabled defaultValue={incidence.id} placeholder="station" />
                                            {errors.station?.type === 'required' && <span className="text-danger">Station is required</span>}
                                        </div>
                                    </div>
                                    <div className="row g-3 mt-1">
                                        <div className="col-sm-12">
                                            <label htmlFor="status" className="block mb-2 text-sm font-medium">Title</label>
                                            <input className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" type="text" placeholder="title" disabled defaultValue={incidence.title} />
                                            {errors.title && errors.title.type === "mminLength" && <span className="text-danger">Min length 5 characters</span> }
                                            {errors.title && errors.title.type === "maxLength" && <span className="text-danger">Max length 200 characters</span> }
                                            {errors.title?.type === 'required' && <span className="text-danger">Title is required</span>}
                                        </div>
                                    </div>
                                    <div className="row g-3 mt-1">
                                        <div className="col-sm-12">
                                            <label htmlFor="status" className="block mb-2 text-sm font-medium">Description</label>
                                            <input className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" type="text" disabled defaultValue={incidence.description} placeholder="description" />
                                            {errors.description && errors.description.type === "mminLength" && <span className="text-danger">Min length 5 characters</span> }
                                            {errors.description && errors.description.type === "maxLength" && <span className="text-danger">Max length 200 characters</span> }
                                            {errors.description?.type === 'required' && <span className="text-danger">Description is required</span>}
                                        </div>
                                    </div>
                                </>
                                : ""
                            ))}
                            <div className="row g-3 mt-1">
                                <div className="col-sm-12">
                                    <label htmlFor="status" className="block mb-2 text-sm font-medium">Status</label>
                                    <input className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" type="text" placeholder="status" {...register("status", {required: true, maxLength: 50, minLength: 4})} />
                                    {errors.status && errors.status.type === "mminLength" && <span className="text-danger">Min length 4 characters</span> }
                                    {errors.status && errors.status.type === "maxLength" && <span className="text-danger">Max length 200 characters</span> }
                                    {errors.status?.type === 'required' && <span className="text-danger">Status is required</span>}
                                </div>
                            </div>
                            <div className="row g-3 mt-1">
                                <div className="col-sm-12">
                                    <label htmlFor="status" className="block mb-2 text-sm font-medium">Solution</label>
                                    <input className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" type="text" placeholder="solution" {...register("solution", {required: true, maxLength: 198, minLength: 5})} />
                                    {errors.solution && errors.solution.type === "mminLength" && <span className="text-danger">Min length 5 characters</span> }
                                    {errors.solution && errors.solution.type === "maxLength" && <span className="text-danger">Max length 200 characters</span> }
                                    {errors.solution?.type === 'required' && <span className="text-danger">Solution is required</span>}
                                </div>
                            </div>
                            <p className="text-sm font-light pt-2">
                                <button className="w-full font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary text-base-100" type="submit" control-id="ControlID-20">Update incidence</button>    
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}