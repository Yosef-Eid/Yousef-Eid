import React from 'react'

function Explains() {
  let LinksPosts = [
    "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fyousefeidd%2Fposts%2Fpfbid0289ZSvEtHZARi8BGAGPQCtNnF1xky79aypZNEVMKEziNBFVhE6EsDK7artj3CVfnBl&show_text=true&width=500",
    "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fyousefeidd%2Fposts%2Fpfbid0wqXSgRxRoaCMb7o4RUEiq9gsjpzU34mVpqH4jw4JF7Gr8KgYAgBaq1qxGjReRNQBl&show_text=true&width=500",
    "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fyousefeidd%2Fposts%2Fpfbid0ab68J68fJyVtGTE7GXPyDJcmxtLYNgVr2z42RPf8itUWTUc3LzaMEGF9ryUKNfLsl&show_text=true&width=500",
    "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fyousefeidd%2Fposts%2Fpfbid0srDduBRmWwirEwCJX2spxFgpJEWh8vU56MXa7ASQnznkHwXDbZgLBHjTQtPxaZEvl&show_text=true&width=500",
    "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fyousefeidd%2Fposts%2Fpfbid0fmrVyUK5t49rNVM4THMhaEb7qCQjRTFLRDh2nFNcszh5jZQWbLbHp6gANZqUXywbl&show_text=true&width=500",
    "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fyousefeidd%2Fposts%2Fpfbid02ADoPPNr9gxqRTnyueTMoc4SYACa4vVF97e6NWbop4iaGEFJAULPUYyNBfSDAbgJxl&show_text=true&width=500",
    "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fyousefeidd%2Fposts%2Fpfbid02dNW23eNVrMXC4K474KqTzPtKANXH4rJy2K4W1e3jsWDuQUigAqSnafThXHkeoeuJl&show_text=true&width=500",
    "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fyousefeidd%2Fposts%2Fpfbid0wpykLBYTKfReEwkHyTW9YsXFfdrBg3VbUhHzkn92cp7NLnqXsVdk6QTFPdDYqTQYl&show_text=true&width=500",
    "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fyousefeidd%2Fposts%2Fpfbid0kFSqTygGn41U8tG9MourBpHaumnMn3bARCXNF5u5MWb6B9BNP3vZ1W3d8ba9x6vbl&show_text=true&width=500",
    "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fyousefeidd%2Fposts%2Fpfbid02YqCJ71hsYoic6jr1YPQnhDqDg92X69TeHacuRxHdSVPq6StY51rdDZmZk57CSZrql&show_text=true&width=500",
  ]

  return (
    <div id='explains' className='w-full flex flex-col items-center justify-center flex-wrap gap-16 mt-28'>
      <div className='flex flex-col items-center gap-6'>
        <h1 className='text-[32px] font-semibold text-[#2b2b2b]'><span className='text-[#ffb400]'>My</span> Explains</h1>
        <p className='w-[80%] text-center text-[17px] text-[#6a6a6a] font-[400]'>Some explanations of programming ideas and concepts</p>
      </div>
      <div className='w-full flex flex-wrap items-center justify-center gap-3 max-[610px]:grid max-[610px]:gap-1 max-[610px]:grid-cols-2'>
        {
          LinksPosts.map((post, index) => (
            <iframe key={index} className='w-[260px] h-80 rounded-lg shadow-xl max-[610px]:w-full max-[610px]:h-[250px]' src={post} frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
          ))
        }
      </div>
    </div>
  )
}

export default Explains;
