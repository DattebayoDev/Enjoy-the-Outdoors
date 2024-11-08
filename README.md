Functions should be efficient, readable, and maintainable.


<main>
  <div class="vh-100 d-flex">
    <div class="container-fluid col-6" id="col1">
      <section class="d-flex justify-content-left mt-3">
        <div id="searchLabel">
          <p class="fs-6 me-2">Select an option:</p>
        </div>
        <!-- changing below -->
        <select  
          class="form-select form-select-sm h-75 w-50"
          id="mountainDropDown"
        >
          <option>Select One</option>
        </select>
      </section>
      <div id="mountainName"><p>Mountain Name</p></div>
    </div>
    <div class="col-6" id="col2">
      <div class="card mb-3">
        <div class="video">Video</div>
        <div class="card-body">
          <div class="card-title">Title</div>
          <div class="card-subtitle">Sub-title</div>
          <div class="card-text">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Ornare
            quisque taciti diam dui per pharetra blandit. Eu pretium felis
            parturient facilisi et vivamus adipiscing.
          </div>
        </div>
      </div>
    </div>

    <!-- <div id="mountainDisplayDropDown"></div> -->
  </div>
</main>