import { useState } from "react"

const EditDetail = () => {
    const [edit, setEdit] = useState(false);

    return (
        <>
            {edit ? (
                
            <div class="card mb-3">
            <div class="card-body">
                <div class="row mb-3">
                    <div class="col-sm-3">
                        <h6 class="mb-0">Full Name</h6>
                    </div>
                    <div class="col-sm-9 text-secondary"> 
                        <input type="text" class="form-control" value="John Doe"/>
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-sm-3">
                        <h6 class="mb-0">Email</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                        <input type="text" class="form-control" value="john@example.com"/>
                        </div></div>
                    <div class="row mb-3">
                        <div class="col-sm-3">
                            <h6 class="mb-0">Phone</h6>
                        </div>
                        <div class="col-sm-9 text-secondary"> 
                            <input type="text" class="form-control" value="(239) 816-9029"/>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-sm-3">
                            <h6 class="mb-0">Mobile</h6>
                        </div>
                        <div class="col-sm-9 text-secondary"> 
                            <input type="text" class="form-control" value="(320) 380-4539"/>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-sm-3">
                            <h6 class="mb-0">Address</h6>
                        </div>
                        <div class="col-sm-9 text-secondary"> 
                        <input type="text" class="form-control" value="Bay Area, San Francisco, CA"/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-3">
                    </div>
                    <div class="col-sm-9 text-secondary"> 
                        <input type="button" onClick={()=>{setEdit(false)}} class="btn btn-primary px-4" value="Save Changes"/>
                    </div>
                </div>
            </div>
        </div>
            ) : (
                // Content when 'edit' is false
                <div class="card mb-3">
                <div class="card-body">
                    <div class="row">
                        <div class="col-sm-3">
                            <h6 class="mb-0">Full Name</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                            Kenneth Valdez
                        </div>
                    </div>
                    <hr />
                    <div class="row">
                        <div class="col-sm-3">
                            <h6 class="mb-0">Email</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                            fip@jukmuh.al
                        </div>
                    </div>
                    <hr />
                    <div class="row">
                        <div class="col-sm-3">
                            <h6 class="mb-0">Phone</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                            (239) 816-9029
                        </div>
                    </div>
                    <hr />
                    <div class="row">
                        <div class="col-sm-3">
                            <h6 class="mb-0">Mobile</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                            (320) 380-4539
                        </div>
                    </div>
                    <hr />
                    <div class="row">
                        <div class="col-sm-3">
                            <h6 class="mb-0">Address</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                            Bay Area, San Francisco, CA
                        </div>
                    </div>
                    <hr />
                    <div class="row">
                        <div class="col-sm-12">
                            <a class="btn btn-info " target="__blank" onClick={()=>{setEdit(true)}}>Edit</a>
                        </div>
                    </div>
                </div>
            </div>
            )}    
        </>
    );
}

export default EditDetail;