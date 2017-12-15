//auto archive labeled emails from gmail
//from hcon94 
//run in scripts.google.com
function gmailAutoarchive() {
  // Get all the threads that are labelled
  var labels = GmailApp.getUserLabels();
  for (var a = 0; a < labels.length; a++) {
    var threads = labels[a].getThreads(0, 500);
    // Archive all the labelled threads
    for (var i = 0; i < threads.length; i++) {
      threads[i].moveToArchive();
    }
  }
}
