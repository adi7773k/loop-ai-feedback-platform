"use client";

export default function AdvancedFilters() {

  return (
    <div className="
      bg-white
      dark:bg-gray-900
      p-5
      rounded-xl
      shadow
      grid
      md:grid-cols-4
      gap-4
      mb-6
    ">

      {/* Search */}

      <input
        type="text"
        placeholder="Search feedback..."
        className="
        border
        rounded-lg
        px-4
        py-2
        bg-transparent
        "
      />


      {/* Sentiment */}

      <select
        className="
        border
        rounded-lg
        px-4
        py-2
        bg-transparent
        "
      >

        <option>
          All Sentiment
        </option>

        <option>
          Positive
        </option>

        <option>
          Neutral
        </option>

        <option>
          Negative
        </option>

      </select>



      {/* Rating */}

      <select
        className="
        border
        rounded-lg
        px-4
        py-2
        bg-transparent
        "
      >

        <option>
          All Rating
        </option>

        <option>
          ⭐⭐⭐⭐⭐
        </option>

        <option>
          ⭐⭐⭐⭐
        </option>

        <option>
          ⭐⭐⭐
        </option>

        <option>
          ⭐⭐
        </option>

      </select>



      {/* Date */}

      <select
        className="
        border
        rounded-lg
        px-4
        py-2
        bg-transparent
        "
      >

        <option>
          All Time
        </option>

        <option>
          Today
        </option>

        <option>
          This Week
        </option>

        <option>
          This Month
        </option>

      </select>


    </div>
  );
}